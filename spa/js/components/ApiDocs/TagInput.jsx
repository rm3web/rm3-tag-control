import React from 'react';
import Prism from '../Prism';
import { Label } from 'react-bootstrap';
import { Tags, TagInput } from '../../../../src';
import { LinkedDataBox } from 'linked-data-box';

class TagInputExample extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: new LinkedDataBox(),
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

  addTag(tag) {
    let pred = 'plain';
    if (tag.hasOwnProperty('predicate')) {
      pred = tag.predicate.id;
    }
    this.state.tags.addTag(pred, tag.tag);
    this.setState({tags: this.state.tags});
  }

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
            <Tags predicates={this.state.predicates} tags={this.state.tags} />
            <TagInput predicates={this.state.predicateList} addTag={this.addTag.bind(this)} />
          </div>

          <div className="panel-footer">
            <Label bsSize="small">Code:</Label>
            <Prism className="language-jsx">
              { `<Tags />
              <TagInput addTag={this.addTag.bind(this)} />` }
            </Prism>
          </div>
        </div>

      </div>
    );
  }

}

export default TagInputExample;
