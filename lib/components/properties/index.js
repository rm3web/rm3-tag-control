import React from 'react';

class Entry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    if (this.props.desc) {
      this.state.desc = this.props.desc;
    }
    if (this.props.uri) {
      this.state.uri = this.props.uri;
    }
    if (this.props.value) {
      this.state.value = this.props.value;
    }
  }

  onChangeDesc(e) {
    this.setState({ desc: e.target.value});
  }
  onChangeUri(e) {
    this.setState({ desc: e.target.value});
  }
  onChangeValue(e) {
    this.setState({ desc: e.target.value});
  }

  render() {
    return (<fieldset>
      <div className="pure-u-1-3">
      <input onChange={this.onChangeDesc.bind(this)}
        className="pure-input-1" value={this.state.desc} placeholder="Description" />
      </div>
      <div className="pure-u-1-3">
      <input onChange={this.onChangeUri.bind(this)}
        className="pure-input-1" value={this.state.uri} placeholder="URI" />
      </div>
      <div className="pure-u-1-3">
      <textarea onChange={this.onChangeValue.bind(this)}
        className="pure-input-1" value={this.state.value} placeholder="Value" />
      </div>
    </fieldset>);
  }
};

var Properties = React.createClass({
  displayName: 'Properties',

  getInitialState: function() {
    var properties;
    if (this.props.properties) {
      properties = this.props.properties;
    } else {
      properties = [];
    }
    return {properties: properties};
  },

  render: function() {
    var prefix = this.props.prefix
    var blocks = this.state.properties.map(function (prop, i) {
      return (<Entry key={i} {...prop} />)
    })
    return (<div>{blocks}</div>);
  }
})

export default Properties;
