import * as React from "react";
import './terminalanimation.scss';

export
class TerminalAnimation 
extends React.Component<TerminalAnimation.IProps, TerminalAnimation.IState> {

    constructor(props: TerminalAnimation.IProps) {
        super(props);
        this.state = {
            currLineIdx: -1,
            currCharIdx: 0,
        }

        this._addChar = this._addChar.bind(this);
        this._nextLine = this._nextLine.bind(this);
    }

    componentDidMount() {
        this._nextLine();
    }

    componentWillUnmount() {
        if (this._typeInterval)
            clearInterval(this._typeInterval);
        if (this._lineTimeout)
            clearTimeout(this._lineTimeout);
    }

    render() {
        let lines = this.props.lines;
        let lineIdx = this.state.currLineIdx;
        let charIdx = this.state.currCharIdx;
        let line = lines[lineIdx];

        if (lineIdx < 0)
            return null;
        
        return (
            <div className='terminal-body'>
            <div className='terminal-content'>
                {
                    lines.slice(0, lineIdx).map((l, idx) => {
                        return (
                            <p key={idx}>{(l.prompt ? this.props.prompt : '') + l.content}<br /></p>
                        );
                    })
                }
                {
                    <p>{(line.prompt ? this.props.prompt : '') + line.content.slice(0, charIdx)}</p>
                }
            </div>
            </div>
        );
    }

    private _addChar() {
        let lines = this.props.lines;
        let lineIdx = this.state.currLineIdx;
        let charIdx = this.state.currCharIdx;

        if (charIdx == lines[lineIdx].content.length) {
            // Line has been printed out entirely. Setup next line.
            clearInterval(this._typeInterval);
            this._typeInterval = null;
            this._lineTimeout = setTimeout(this._nextLine, 0);
            return;
        }

        this.setState({
            currCharIdx: this.state.currCharIdx + 1
        });
    }

    private _nextLine() {
        this._lineTimeout = null;
        let currLineIdx = this.state.currLineIdx;
        let nextIdx = currLineIdx + 1;
        let lines = this.props.lines;
        
        // Check if we're out of lines
        if (nextIdx >= lines.length)
            return;
        
        this.setState({
            currLineIdx: nextIdx,
            currCharIdx: 0
        });

        this._lineTimeout = setTimeout(() => {
            if (lines[nextIdx].type) {
                this.setState({
                    currLineIdx: nextIdx,
                    currCharIdx: 0
                });
                // 'Type' the values into the DOM
                this._typeInterval = setInterval(this._addChar, this.props.typeRate);
            } else {
                this.setState({
                    currLineIdx: nextIdx,
                    currCharIdx: lines[nextIdx].content.length
                });
                this._lineTimeout = setTimeout(this._nextLine, 0);
            }
        }, lines[nextIdx].lineDelay);
    }

    private _typeInterval: NodeJS.Timer = null;;
    private _lineTimeout: NodeJS.Timer = null;
}

export
namespace TerminalAnimation {

    export
    interface ILine {
        type: boolean;
        prompt: boolean;
        lineDelay: number;
        content: string;
    }

    export
    interface IProps {
        typeRate: number;
        lines: ILine[];
        prompt: string;
    }

    export
    interface IState {
        currLineIdx: number;
        currCharIdx: number;
    }
}