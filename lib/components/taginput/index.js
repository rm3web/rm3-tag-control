import React from 'react';
import ReactSuperSelect from 'react-super-select';
import Autosuggest from 'react-autosuggest';

// Imagine you have a list of languages that you'd like to autosuggest. 
const languages = [
  'C', 'Cat', 'Cros', 'Elm'
];
 
// Teach Autosuggest how to calculate suggestions for any given input value. 
function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
 
  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.toLowerCase().slice(0, inputLength) === inputValue
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
      suggestions: []
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

  onChangeTag = (event, { newValue }) => {
    this.setState({
      tagText: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions. 
  // You already implemented this logic above, so just use it. 
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };
 
  // Autosuggest will call this function every time you need to clear suggestions. 
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { tagText, suggestions } = this.state;
 
    // Autosuggest will pass through all these props to the input field. 
    const inputProps = {
      placeholder: 'tag',
      value: tagText,
      style: {width: '40%', lineHeight: '30px'},
      onChange: this.onChangeTag.bind(this),
      disabled: !this.props.ready,
      onKeyUp: this.onKeyInput.bind(this)
    };
    const t = (
      <div>
      <ReactSuperSelect placeholder={this.props.selectPlaceholder}
                  dataSource={this.props.predicates}
                  value={this.state.predText} groupBy="metadataClass"
                  onChange={this.onChangePredicate.bind(this)}
                  clearable= {false} />
       <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps} />
       <button className="pure-button pure-button-primary" disabled={!this.props.ready}
          style= {{width: '9%', lineHeight: '30px'}} onClick={this.handleAdd.bind(this)} type="button">
          {this.props.addMessage}</button>
      </div>
    );
    return t;
  }

}

export default TagInput;
