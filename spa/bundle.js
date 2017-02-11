var React = require('react');
var ReactDOM = require('react-dom');
var TagControl = require('../lib/');
var LinkedDataBox = require('linked-data-box').LinkedDataBox;

var tags = new LinkedDataBox();
tags.addTag('plain', {'@id': 'twilight sparkle'});
tags.addTag('pony', {'@id': 'pinkie pie'});
tags.addTag('navigation', {'@id': 'navbar'});

var predicateList = [
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

var linkList = [
  {
    id: 'wh.meta.blah',
    name: 'Blah Link'},
  {
    id: 'wh.meta.ponies',
    name: 'Ponies'}
];

var predicates = {};
predicateList.forEach( (currentValue) => {
  predicates[currentValue.id] = {
    name: currentValue.name,
    metadataClass: currentValue.metadataClass,
  };
});

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
    this.state.tags.addTag(pred, {"@id": tag.tag, "objClass": tag.type});
    this.setState({tags: this.state.tags});
  }

  render() {
    return (
      <div>
        <TagControl.Tags predicates={this.state.predicates}
          tags={this.state.tags} />
        <TagControl.TagInput predicates={this.state.predicateList} 
          ready={true} addTag={this.addTag.bind(this)} links={linkList}
          defaultPredicate={this.state.predicateList[0]}
          addMessage="Add" placeholder="Select a predicate" />
      </div>
    );
  }

}

ReactDOM.render(
  <div>
    <h2>Tag Control</h2>
    <div>
    <TagControl.Tags tags={tags} predicates={predicates} readOnlyPredicates={{'navigation': true}} />
    </div>
    <h2>Tag Input</h2>
    <TagInputExample />
    <h2>Properties</h2>
    <TagControl.Properties properties={[{}]} />
  </div>
  ,
  document.getElementById('tagcontrol')
);