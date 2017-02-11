import React from 'react';
import ReactSuperSelect from 'react-super-select';
import Autosuggest from 'react-autosuggest';
 
// Teach Autosuggest how to calculate suggestions for any given input value. 
function getSuggestions(value, popularTags) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
 
  return inputLength === 0 ? [] : popularTags.filter(tag =>
    tag.toLowerCase().slice(0, inputLength) === inputValue
  );
}
 
// When suggestion is clicked, Autosuggest needs to populate the input field 
// based on the clicked suggestion. Teach Autosuggest how to calculate the 
// input value for every given suggestion. 
function getSuggestionValue(suggestion) {
  return suggestion;
}
 
// Use your imagination to render suggestions. 
function renderSuggestion(suggestion) {
  return (
    <span>{suggestion}</span>
  );
}

class TagInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tagText: '',
      predicate: props.defaultPredicate,
      suggestions: [],
      type: {id:'tag', name:"Text"}
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
      {tag: this.state.tagText,
        type: this.state.type.id}
      );
    } else {
      this.props.addTag(
        {predicate: this.state.predicate,
         tag: this.state.tagText,
        type: this.state.type.id}
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

  // Autosuggest will call this function every time you need to update suggestions. 
  // You already implemented this logic above, so just use it. 
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value, this.props.popularTags)
    });
  };
 
  // Autosuggest will call this function every time you need to clear suggestions. 
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onChangeType(type) {
    this.setState({ type: type });
  }

  onChangeTag = (event, { newValue }) => {
    this.setState({
      tagText: newValue
    });
  };

  onChangeLinkTag(e) {
    this.setState({
      tagText: e.target.value
    });
  };

  onChangeOntag(tag) {
    this.setState({ tagText: tag.id});
  }

  render() {
    const { tagText, suggestions } = this.state;
 
    // Autosuggest will pass through all these props to the input field. 
    const inputProps = {
      placeholder: 'tag',
      value: tagText,
      style: {width: '100%', lineHeight: '30px'},
      onChange: this.onChangeTag.bind(this),
      disabled: !this.props.ready,
      onKeyUp: this.onKeyInput.bind(this)
    };

    var inputArea;
    if (this.state.type.id === 'ontag') {
      inputArea = (<ReactSuperSelect placeholder={'Type'}
                  dataSource={this.props.links}
                  onChange={this.onChangeOntag.bind(this)}
                  clearable= {false} />);
    } else if (this.state.type.id === 'link') {
      inputArea = (<input type={'text'} value={this.state.tagText}
        onChange={this.onChangeLinkTag.bind(this)} disabled = {!this.props.ready}
        style= {{width: '100%', lineHeight: '30px'}}
        onKeyUp = {this.onKeyInput.bind(this)} />);
    } else {
      inputArea = (<Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps} />);
    }
    

    const t = (
      <div className="pure-g">
      <div className="pure-u-1-3">
      <div style={{"padding": ".1em"}}>
      <ReactSuperSelect placeholder={this.props.selectPlaceholder}
        dataSource={this.props.predicates}
        groupBy="metadataClass"
        onChange={this.onChangePredicate.bind(this)}
        clearable= {false} />
      </div>
      </div>
      <div className="pure-u-1-2">
      <div style={{"padding": ".1em"}}>
       {inputArea}
       <ReactSuperSelect placeholder={'Type'}
          dataSource={[{id:'tag', name:"Text"}, {id:'ontag', name:"Ontological Tag"}, {id:'link', name:"External link"}]}
          onChange={this.onChangeType.bind(this)}
          clearable= {false} initialValue={this.state.type} />
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
