import React from 'react';
import Prism from '../Prism';
import { Label } from 'react-bootstrap';
import { Tags } from '../../../../src';
import { LinkedDataBox } from 'linked-data-box';

class TagsExample extends React.Component {
  constructor() {
    super();

    const tags = new LinkedDataBox;
    tags.addTag('plain', {'@id': 'twilight sparkle'});
    tags.addTag('pony', {'@id': 'pinkie pie'});
    tags.addTag('navigation', {'@id': 'navbar'});
    this.state = {
      tags: tags,
    };
    this.state.predicateList = [
      { id: 'plain',
        name: 'Plain tag (no semantic information)',
        metadataClass: 'Plain'},
      {
        id: 'dc:subject',
        name: 'Dublin Core: Subject',
        metadataClass: 'Dublin Core'},
      {
        id: 'dc:creator',
        name: 'Dublin Core: Creator',
        metadataClass: 'Dublin Core'},
      {
        id: 'dc:coverage',
        name: 'Dublin Core: Coverage',
        metadataClass: 'Dublin Core'},
      {
        id: 'pony',
        name: 'OMG Ponies',
        metadataClass: 'Ponies'},
    ];
    this.state.predicates = {};
    this.state.predicateList.forEach( (currentValue) => {
      this.state.predicates[currentValue.id] = {
        name: currentValue.name,
        metadataClass: currentValue.metadataClass,
      };
    });
  }

  render() {
    const self = this;
    return (
      <div>
        <Prism className="language-jsx">
          { `import {Tags} from 'rm3-tag-control';` }
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
            <Tags tags={self.state.tags} predicates={self.state.predicates} readOnlyPredicates={{'navigation': true}} />
          </div>

          <div className="panel-footer">
            <Label bsSize="small">Code:</Label>
            <Prism className="language-jsx">
              { `<Tags tags={ tags } />` }
            </Prism>
          </div>
        </div>
      </div>
    );
  }

}

export default TagsExample;
