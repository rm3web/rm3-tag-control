import React from 'react';
import ReactSuperSelect from 'react-super-select';


class TagInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tagText: '',
      predicate: props.defaultPredicate
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
      <div className="pure-g">
      <div className="pure-u-1-3">
      <div style={{"padding": ".1em"}}>
      <ReactSuperSelect placeholder={this.props.selectPlaceholder}
                  dataSource={this.props.predicates}
                  value={this.state.predText} groupBy="metadataClass"
                  onChange={this.onChangePredicate.bind(this)}
                  clearable= {false} />
      </div>
      </div>
      <div className="pure-u-1-2">
      <div style={{"padding": ".1em"}}>
       <input type={'text'} value={this.state.tagText}
          onChange={this.onChangeTag.bind(this)} disabled = {!this.props.ready}
          style= {{width: '100%', lineHeight: '30px'}}
          onKeyUp = {this.onKeyInput.bind(this)} />
       <ReactSuperSelect placeholder={'Type'}
                  dataSource={[{id:'text', name:"Text"}, {id:'link', name:"Link"}]}
                  clearable= {false} />
      </div>
      </div>
      <div className="pure-u-1-6">
      <div style={{"padding": ".1em"}}>
        <button className="pure-button pure-button-primary pure-u-1-1" disabled={!this.props.ready}
          style= {{lineHeight: '30px'}} onClick={this.handleAdd.bind(this)} type="button">
          {this.props.addMessage}</button>
      </div>
      </div>
      </div>
    );
    return t;
  }

}

export default TagInput;
