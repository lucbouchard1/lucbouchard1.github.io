import * as React from "react";
import { GraphQL } from '../graphql';
import Link from 'gatsby-link';
import './projects.scss';

export
    class Projects extends React.Component<Projects.IProps, undefined> {

    constructor(props: Projects.IProps) {
        super(props);
    }

    render() {
        return (
            <div className='projects-body'>
                <div className='projects-header'>
                    <h2>Projects and Experience</h2>
                </div>
                <div className='projects-cards'>
                    {
                        this.props.projects.map((project: GraphQL.Post, idx: number) => {
                            return (
                                <div key={project.node.fields.name} className='projects-card-container'>
                                    <div className='projects-card-separator'>
                                        <Link to={project.node.fields.slug}>
                                            <div className={'projects-card ' + project.node.fields.name}>
                                                <img className='projects-card-logo' src={project.node.fields.name + '.png'} />
                                            </div>
                                            <p>{project.node.frontmatter.title}</p>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export
namespace Projects {
    export
        interface IProps {
        projects: GraphQL.Post[];
    }
}