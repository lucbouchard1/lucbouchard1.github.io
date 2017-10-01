import {Header} from '../components/header';
import * as React from "react";
import './project.scss';

const ProjectTemplate: React.SFC<any> = ({ data }) => {
  const post = data.markdownRemark
  return (
    <div className='lb-project-body'>
      <Header {...{isFixed: true}}/>
      <h1 className='lb-project-title'>
        {post.frontmatter.title}
      </h1>
      <div className='lb-project-content'>
        <div className='lb-project-html' dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}
export default ProjectTemplate;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
 `;