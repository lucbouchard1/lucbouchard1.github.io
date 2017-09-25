import * as React from "react";
import './terminalanimation.scss';

export
class TerminalAnimation 
extends React.Component<TerminalAnimation.IProps, TerminalAnimation.IState> {

    constructor(props: TerminalAnimation.IProps) {
        super(props);
        this.state = {
            visibleLines: [],
            currLine: null,
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
        if (!this.state.currLine)
            return null;

        let currLine = '';
        if (this.state.currLine.isCommand) {
            currLine += this.props.prompt;
            currLine += this.state.currLine.content.slice(0, this.state.currCharIdx);
        } else {
            currLine = this.state.currLine.content;
        }

        return (
            <div className='terminal-body'>
                {
                    this.state.visibleLines.map((line, idx) => {
                        let lineData = "";
                        if (line.isCommand)
                            lineData += this.props.prompt;
                        lineData += line.content;

                        return (
                            <p key={idx}>{lineData}</p>
                        );
                    })
                }
                {
                    <p>{currLine}</p>
                }
            </div>
        );
    }

    private _addChar() {
        let currLine = this.state.currLine;
        let visibleLines = this.state.visibleLines;
        let lines = this.props.lines;

        if (!currLine.isCommand ||
            currLine.content.length == this.state.currCharIdx) {
            // Line has been printed out entirely. Setup next line.
            clearInterval(this._typeInterval);
            this._typeInterval = null;
            this._lineTimeout = setTimeout(this._nextLine, this.props.linePause);
            return;
        }

        this.setState({
            currCharIdx: this.state.currCharIdx + 1
        });
    }

    private _nextLine() {
        this._lineTimeout = null;
        let currLine = this.state.currLine;
        let visibleLines = this.state.visibleLines;
        let lines = this.props.lines;
        
        // Check if we're out of lines
        if (lines.length == 0 || visibleLines.length == lines.length - 1)
            return;
        
        let newVisibleLines = currLine ? this.state.visibleLines.concat(currLine) : [];

        this.setState({
            visibleLines: newVisibleLines,
            currLine: lines[newVisibleLines.length],
            currCharIdx: 0
        });
        this._typeInterval = setInterval(this._addChar, this.props.typeRate);
    }

    private _typeInterval: NodeJS.Timer = null;;
    private _lineTimeout: NodeJS.Timer = null;
}

export
namespace TerminalAnimation {

    export
    interface ILine {
        isCommand: boolean;
        content: string;
    }

    export
    interface IProps {
        typeRate: number;
        linePause: number;
        prompt: string;
        lines: ILine[];
    }

    export
    interface IState {
        visibleLines: ILine[];
        currLine: ILine;
        currCharIdx: number;
    }
}