import React from 'react';
import PropTypes from 'prop-types';

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
    this.setState({ desc: e.target.desc});
  }
  onChangeUri(e) {
    this.setState({ uri: e.target.uri});
  }
  onChangeValue(e) {
    this.setState({ value: e.target.value});
  }

  render() {
    return (<fieldset>
      <div className="pure-u-1-3">
      <input onChange={this.onChangeDesc.bind(this)} name={this.props.prefix + '[desc]'}
        className="pure-input pure-u-1" value={this.state.desc} placeholder="Description" />
      </div>
      <div className="pure-u-1-3">
      <input onChange={this.onChangeUri.bind(this)} name={this.props.prefix + '[uri]'}
        className="pure-input pure-u-1" value={this.state.uri} placeholder="URI" />
      </div>
      <div className="pure-u-1-3">
      <textarea onChange={this.onChangeValue.bind(this)} name={this.props.prefix + '[value]'}
        className="pure-input pure-u-1" value={this.state.value} placeholder="Value" />
      </div>
    </fieldset>);
  }
};

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    if (this.props.properties) {
      this.state.properties = this.props.properties;
    } else {
      this.state.properties = [];
    }
  }

  render() {
    var prefix = this.props.prefix
    var blocks = this.state.properties.map(function (prop, i) {
      return (<Entry prefix={prefix + '[' + i + ']'} key={i} {...prop} />)
    })
    return (<div>{blocks}</div>);
  }
}

Properties.displayName = 'Properties';

export default Properties;
