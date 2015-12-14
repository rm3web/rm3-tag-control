import React from 'react';
import Prism from '../Prism';
import LiLink from '../LiLink';
import { IndexLink } from 'react-router';

class ApiDocs extends React.Component {
  renderHome() {
    return (
      <div>

        <Prism className="language-jsx">
          { `import {Tags, TagInput} from 'rm3-tag-control';` }
        </Prism>

        <p>&nbsp;</p>

      </div>
    );
  }

  renderSidebar() {
    return (
      <ul className="ascii fixed">
        <li>
          <IndexLink activeClassName="active" to="/api_docs">Rm3TagControl</IndexLink>
          <ul>
            <LiLink to="/api_docs/tags">Tags</LiLink>
            <LiLink to="/api_docs/tag_input">TagInput</LiLink>
          </ul>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div id="top">
        <p>&nbsp;</p>

        <div className="container">
          <div className="row">
            <div className="col-xs-3 ascii">
              { this.renderSidebar() }
            </div>

            <div className="col-md-9">
              { this.props.children || this.renderHome() }
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ApiDocs;
