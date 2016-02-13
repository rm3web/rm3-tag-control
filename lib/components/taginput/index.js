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
      this.doAdd();
      return false;
    }
  }

  doAdd() {
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
  }

  handleAdd(e) {
    e.preventDefault();
    this.doAdd();
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
      <ReactSuperSelect placeholder={this.props.selectPlaceholder}
                  dataSource={this.props.predicates}
                  value={this.state.predText} groupBy="metadataClass"
                  onChange={this.onChangePredicate.bind(this)}
                  clearable= {false} />
       <input type={'text'} value={this.state.tagText}
          onChange={this.onChangeTag.bind(this)} disabled = {!this.props.ready}
          style= {{width: '40%', lineHeight: '30px'}}
          onKeyUp = {this.onKeyInput.bind(this)} />
       <button className="pure-button pure-button-primary" disabled={!this.props.ready}
          style= {{width: '9%', lineHeight: '30px'}} onClick={this.handleAdd.bind(this)} type="button">
          {this.props.addMessage}</button>
      </div>
    );
    return t;
  }

}

export default TagInput;
