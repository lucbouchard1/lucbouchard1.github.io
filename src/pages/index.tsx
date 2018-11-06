import * as React from 'react';
import {TerminalAnimation} from '../components/terminalanimation';
import {Projects} from '../components/projects';
import {Header} from '../components/header';
import {GraphQL} from '../graphql';
import './index.scss';
let avatar = require('../assets/avatar.jpg');

let lines: TerminalAnimation.ILine[] = [
    {prompt: true, lineDelay: 700, type: true, content:  './print_desc.sh'},
    {prompt: false, lineDelay: 0, type: false, content: "Welcome to my portfolio! I am a physics ungerdraduate at California Polytechnic \
     State University pursuing a programming career. Althoug I'm studying physics at Cal Poly, my interests have always been closely linked with engineering."},
    {prompt: false, lineDelay: 0, type: false, content: ''},
    {prompt: true, lineDelay: 3000, type: true, content:  'cat interests.txt'},
    {prompt: false, lineDelay: 0, type: false, content: 'Programming, physics, space, and other cool things!'},
    {prompt: true, lineDelay: 700, type: true, content:  ''},
    {prompt: true, lineDelay: 100, type: true, content:  ''},
    {prompt: true, lineDelay: 100, type: true, content:  'ls experience/'},
    {prompt: false, lineDelay: 0, type: false, content: 'Project Jupyter - An Open-Source Platform for Interactive Computing/'},
    {prompt: false, lineDelay: 0, type: false, content: 'PolySat - The Cal Poly CubeSat Program/'},
];

export default
class Index extends React.Component<Index.IProps, Index.IState> {

    constructor(props: Index.IProps) {
        super(props);

        this.state = {
            introOpacity: 1,
            introHeight: 400,
        };

        this._handleScroll = this._handleScroll.bind(this);
    }

    render() {
        let introStyle;
        let headerProps;

        return (
            <div>
                <div className='lb-intro' style={introStyle}>
                    <div className='lb-left' style={{opacity: this.state.introOpacity}}>
                        <img src={avatar}></img>
                    </div>
                    <div className='lb-right' style={{opacity: this.state.introOpacity}}>
                        <TerminalAnimation lines={lines} typeRate={70} prompt={'luc@lb-lap:~'}/>
                    </div>
                </div>
                <div style={{height: this.state.introHeight}}></div>
                <div className='lb-content'>
                    <Header {...headerProps}/>
                    <div>
                        <Projects projects={this.props.data.allMarkdownRemark.edges}/>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        document.addEventListener('scroll', this._handleScroll);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this._handleScroll);
    }

    private _handleScroll(ev: UIEvent) {
        this.setState((prev) => {
            let opacity = 1 - (document.body.scrollTop / this.state.introHeight);
            if (opacity < 0) {
                return null;
            }
            return ({
                introOpacity:  opacity,
            });
        });
    }
}

namespace Index {

    export
    interface IState {
        introOpacity: number;
        introHeight: number;
    }

    export
    interface IProps {
        data: {
            allMarkdownRemark: {
                edges: GraphQL.IPost[];
            };
        };
    }
}


export const query = graphql`
    query PostsQuery {
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                        type
                        name
                    }
                    frontmatter {
                        title
                        priority
                    }
                }
            }
        }
    }
`;
