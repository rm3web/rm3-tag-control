import React from 'react';
import ReactSuperSelect from 'react-super-select';

class TagInput extends React.Component {

  constructor() {
    super();
    this.state = {
      predText: '',
      tagText: '',
      preds: [
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
      ],
    };
  }

  onChangePredicate(e) {
    console.log(e);
  }

  onChangeTag(e) {
    this.setState({ tagText: e.target.value});
  }

  render() {
    const t = (
      <div>
      <ReactSuperSelect placeholder="Select a predicate"
                  dataSource={this.state.preds} ref="predText"
                  value={this.state.predText} groupBy="metadataClass"
                  onChange={this.onChangePredicate.bind(this)} />
       <input ref="tagText" type={'text'} value={this.state.tagText}
          onChange={this.onChangeTag.bind(this)} style= {{width: '50%', lineHeight: '30px'}} />

      </div>
    );
    return t;
  }

}

export default TagInput;
