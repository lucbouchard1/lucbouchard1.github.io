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
                    <meta charSet="utf-8" />
                    <title>Luc Bouchard</title>
                    <link href="https://fonts.googleapis.com/css?family=Inconsolata|Roboto:500,900" rel="stylesheet"/>
                </Helmet>
                {this.props.children()}
                <div className='lb-footer'>
                    <p>Designed by Luc Bouchard</p>
                    <p>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></p>
                </div>
            </div>
        );
    }
}