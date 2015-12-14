import React from 'react';
import Prism from '../Prism';
import LiLink from '../LiLink';
import { Tags, TagInput } from '../../../../src';
import { Label } from 'react-bootstrap';
import { IndexLink } from 'react-router';

class ApiDocs extends React.Component {
  renderHome() {
    return (
      <div>

        <Prism className="language-jsx">
          { `import {Tags, TagInput} from 'rm3-tag-control';` }
        </Prism>

        <p>&nbsp;</p>
        <p className="lead">Examples:</p>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Default mode</h3>
          </div>

          <div className="panel-body">
            <Tags />
          </div>

          <div className="panel-footer">
            <Label bsSize="small">Code:</Label>
            <Prism className="language-jsx">
              { `<Tags />` }
            </Prism>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Supply tags</h3>
          </div>

          <div className="panel-body">
            <Tags tags={ [{tag: 'twilight sparkle'}, {predicate: {id: 'pony', name: 'dublin core ponies tag', metadataClass: 'ponies'}, tag: 'pinky pie'}] } />
          </div>

          <div className="panel-footer">
            <Label bsSize="small">Code:</Label>
            <Prism className="language-jsx">
              { `<Tags tags={ [{tag: 'twilight sparkle'}, {predicate: {id: 'pony', name: 'dublin core ponies tag', metadataClass: 'ponies'}, tag: 'pinky pie'}] } />` }
            </Prism>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Tag Input</h3>
          </div>

          <div className="panel-body">
            <Tags tags={ [{tag: 'twilight sparkle'}, {tag: 'pinky pie'}] } />
            <TagInput />
          </div>

          <div className="panel-footer">
            <Label bsSize="small">Code:</Label>
            <Prism className="language-jsx">
              { `<Tags tags={ [{tag: 'twilight sparkle'}, {tag: 'pinky pie'}] } />
              <TagInput />` }
            </Prism>
          </div>
        </div>
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
