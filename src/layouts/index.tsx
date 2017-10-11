import * as React from 'react';
import {Helmet} from 'react-helmet';
import 'font-awesome/css/font-awesome.min.css';
import './index.scss';

export default
class Template extends React.Component<any, undefined> {

    render() {
        return (
            <div className='lb-body'>
                <Helmet>
                    <meta charSet='utf-8' />
                    <title>Luc Bouchard</title>
                    <link href='https://fonts.googleapis.com/css?family=Inconsolata|Roboto:400,900' rel='stylesheet'/>
                </Helmet>
                {this.props.children()}
                <div className='lb-footer'>
                    <p>Designed by Luc Bouchard</p>
                </div>
            </div>
        );
    }
}