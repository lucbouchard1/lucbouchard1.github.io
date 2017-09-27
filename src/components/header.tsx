import * as React from "react";
import { GraphQL } from '../graphql';
import Link from 'gatsby-link';
import './header.scss';

export
let Header: React.SFC<Header.IProps> = (props: Header.IProps) => {
    let headerStyle = {
        height: props.height,
        position: props.isFixed ? 'fixed' : 'static'
    }

    return (
        <header className='header lb-grid' style={headerStyle}>
            <div className='lb-left'>
                <Link to='/'><h1 className='header-title'>Luc Bouchard</h1></Link>
            </div>
            <div className='lb-right'>
                <ul className='header-links'>
                    <li><a href='https://google.com'><i className="fa fa-file-text-o fa-4x" aria-hidden="true"></i></a></li>
                    <li><a href='https://google.com'><i className="fa fa-linkedin-square fa-4x" aria-hidden="true"></i></a></li>
                    <li><a href='https://google.com'><i className="fa fa-github fa-4x" aria-hidden="true"></i></a></li>
                    <li><a href='https://google.com'><i className="fa fa-envelope-o fa-4x" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </header>
    );
}

export
namespace Header {
    export
    interface IProps {
        height: number;
        isFixed: boolean;
    }
}