import {Header} from '../components/header';
import * as React from 'react';
import './project.scss';

export default
function ProjectTemplate({ data }: any) {
  const post = data.markdownRemark;
  return (
    <div className='lb-project-body'>
      <Header />
      <div className='lb-project-content'>
        <div className='lb-project-html' dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  );
}

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
