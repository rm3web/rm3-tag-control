import React from 'react';
import Prism from '../Prism';
import { Label } from 'react-bootstrap';
import { Tags, TagInput } from '../../../../src';

class TagInputExample extends React.Component {

  render() {
    return (
      <div>
        <Prism className="language-jsx">
          { `import {Tags, TagInput} from 'rm3-tag-control';` }
        </Prism>

        <p>&nbsp;</p>
        <p className="lead">Examples:</p>

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

}

export default TagInputExample;
