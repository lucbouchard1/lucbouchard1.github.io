import * as React from "react";
import {TerminalAnimation} from '../components/terminalanimation';
import './index.scss';
let avatar = require('./images/avatar.jpg');

let lines: TerminalAnimation.ILine[] = [
    {isCommand: true, content: './print_desc.sh'},
    {isCommand: false, content: 'Hi my name is Luc Bouchard. This is my description.'},
    {isCommand: true, content: 'echo "Declan"'},
    {isCommand: false, content: 'Declan'},
    {isCommand: true, content: 'ls'},
    {isCommand: false, content: 'all my directories'},
    {isCommand: true, content: 'echo "Hello World"'},
    {isCommand: true, content: 'echo "Hello World"'},
]

export default
class Index extends React.Component<undefined, undefined> {

    render() {
        return (
            <div>
                <header className='lb-header'>
                    <div className='lb-profile'>
                        <div><img src={avatar}></img></div>
                        <h1>Luc Bouchard</h1>
                    </div>
                    <div className='lb-desc'>
                        <TerminalAnimation lines={lines} 
                        typeRate={50} linePause={700} prompt={'luc@lb-lap:~$ '}/>
                    </div>
                </header>
                <div>
                    <h1>Hello Typescript world!</h1>
                    <p>This site is named</p>
                </div>
            </div>
        );
    }
}
