import * as React from 'react';
import { GraphQL } from '../graphql';
import Link from 'gatsby-link';
import './header.scss';
let resume = require('../assets/resume.pdf');

export
function Header() {
    return (
        <header className='header'>
            <div className='lb-left'>
                <Link to='/'><h1 className='header-title'>Luc Bouchard</h1></Link>
            </div>
            <div className='lb-right'>
                <ul className='header-links'>
                    <li><a href={resume}><i className='fa fa-file-text-o fa-3x' aria-hidden='true'></i></a></li>
                    <li><a href='https://www.linkedin.com/in/luc-bouchard-551aaa132/'><i className='fa fa-linkedin-square fa-3x' aria-hidden='true'></i></a></li>
                    <li><a href='https://github.com/lucbouchard1'><i className='fa fa-github fa-3x' aria-hidden='true'></i></a></li>
                    <li><a href='http://www.google.com/recaptcha/mailhide/d?k=01tuL6YxSdUrusJKCfHbt5GQ==&c=5t8u_5w5vsi_Pw24wVqrmSn-fVz8cmHuCvH0-flWk7M='><i className='fa fa-envelope-o fa-3x' aria-hidden='true'></i></a></li>
                </ul>
            </div>
        </header>
    );
}
