import React from 'react';
import ReactSuperSelect from 'react-super-select';

class TagInput extends React.Component {

  constructor() {
    super();
    this.state = {
      tagText: '',
    };
  }

  onKeyInput(e) {
    // Enter KEY
    if (e.keyCode === 13) {
      if (this.state.predicate.id === 'plain') {
        this.props.addTag(
        {tag: this.state.tagText}
        );
      } else {
        this.props.addTag(
          {predicate: this.state.predicate,
           tag: this.state.tagText}
          );
      }
      return false;
    }
  }

  onChangePredicate(predicate) {
    this.setState({ predicate: predicate});
  }

  onChangeTag(e) {
    this.setState({ tagText: e.target.value});
  }

  render() {
    const t = (
      <div>
      <ReactSuperSelect placeholder="Select a predicate"
                  dataSource={this.props.predicates}
                  value={this.state.predText} groupBy="metadataClass"
                  onChange={this.onChangePredicate.bind(this)}
                  clearable= {false} />
       <input type={'text'} value={this.state.tagText}
          onChange={this.onChangeTag.bind(this)}
          style= {{width: '50%', lineHeight: '30px'}}
          onKeyUp = {this.onKeyInput.bind(this)}
          />

      </div>
    );
    return t;
  }

}

export default TagInput;
