import * as React from 'react';
import {Helmet} from 'react-helmet';

import './index.scss'

export default 
class Template extends React.Component<any, undefined> {

    render() {
        return (
            <div className='lb-body'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Luc Bouchard</title>
                    <link href="https://fonts.googleapis.com/css?family=Inconsolata|Roboto" rel="stylesheet"/>
                </Helmet>
                {this.props.children()}
            </div>
        );
    }
}