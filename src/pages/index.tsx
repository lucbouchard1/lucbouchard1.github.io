import * as React from "react";
import {TerminalAnimation} from '../components/terminalanimation';
import './index.scss';
let avatar = require('./images/avatar.jpg');

let lines: TerminalAnimation.ILine[] = [
    {prompt: true, lineDelay: 700, type: true, content:  './print_desc.sh'},
    {prompt: false, lineDelay: 0, type: false, content: 'Hi my name is Luc Bouchard. This is my description.'},
    {prompt: false, lineDelay: 0, type: false, content: ''},
    {prompt: true, lineDelay: 3000, type: true, content:  'echo "Declan"'},
    {prompt: false, lineDelay: 0, type: false, content: 'Declan'},
    {prompt: true, lineDelay: 400, type: true, content:  'ls'},
    {prompt: false, lineDelay: 0, type: false, content: 'all my directories'},
    {prompt: true, lineDelay: 400, type: true, content:  'echo "Hello World"'},
    {prompt: false, lineDelay: 0, type: false, content: 'Hello World'},
    {prompt: true, lineDelay: 400, type: true, content:  'echo "Hello World"'},
]

export default
class Index extends React.Component<undefined, Index.IState> {

    constructor() {
        super();

        this.state = {
            introOpacity: 1,
            introHidden: false,
            introHeight: 400,
            headerHeight: 100
        }

        this._handleScroll = this._handleScroll.bind(this);
    }

    render() {
        let introStyle;
        let headerStyle;
        let contentStyle;
        
        if (this.state.introHidden) {
            contentStyle = {paddingTop: this.state.headerHeight + this.state.introHeight};
            headerStyle = {position: 'fixed', height: this.state.headerHeight};
            introStyle = {height: 0};
        } else {
            contentStyle = null;
            headerStyle = {position: 'static', height: this.state.headerHeight};
            introStyle = {height: this.state.introHeight};
        }

        return (
            <div>
                <div className='lb-intro lb-grid' style={introStyle}>
                    <div className='lb-left' style={{opacity: this.state.introOpacity}}>
                        <img src={avatar}></img>
                    </div>
                    <div className='lb-right' style={{opacity: this.state.introOpacity}}>
                        <TerminalAnimation lines={lines} typeRate={70} prompt={'luc@lb-lap:~$ '}/>
                    </div>
                </div>
                <div style={introStyle}></div>
                <div className='lb-content'>
                    <header className='lb-header lb-grid' style={headerStyle}>
                        <div className='lb-left'>
                            <h1>Luc Bouchard</h1>
                        </div>
                        <div className='lb-right'>
                            <ul className='lb-header-links'>
                                <li><i className="fa fa-file-pdf-o fa-4x" aria-hidden="true"></i></li>
                                <li><i className="fa fa-linkedin-square fa-4x" aria-hidden="true"></i></li>
                                <li><i className="fa fa-github fa-4x" aria-hidden="true"></i></li>
                                <li><i className="fa fa-envelope-o fa-4x" aria-hidden="true"></i></li>
                            </ul>
                        </div>
                    </header>
                    <div style={contentStyle}>
                        <h1>This is my Portfolio!</h1>
                        <div style={{height: '2000px'}}></div>
                        <p>Stuff</p>
                    </div>
                </div>
            </div>
        );
    }
    
    componentDidMount() {
        document.addEventListener('scroll', this._handleScroll)        
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this._handleScroll)        
    }
    
    private _handleScroll(ev: UIEvent) {
        this.setState((prev) => {
            let scrollPos = document.body.scrollTop;
            
            if ((prev.introHidden && scrollPos == 0) ||
                (scrollPos <= prev.introHeight)) {
                return ({
                    introOpacity:  1 - (scrollPos/prev.introHeight),
                    introHidden: false
                });
            } else {
                return ({
                    introOpacity: 0,
                    introHidden: true
                });
            }
        });
    }
}

namespace Index {

    export
    interface IState {
        introOpacity: number;
        introHeight: number;
        headerHeight: number;
        introHidden: boolean;
    }
}