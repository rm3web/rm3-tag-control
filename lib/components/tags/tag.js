import React from 'react';
import PropTypes from 'prop-types';

class Tag extends React.Component {

  constructor() {
    super();
  }

  render() {
    let button;
    if (!this.props.readOnlyPredicates.hasOwnProperty(this.props.predicate)) {
      button = (<button style={{ display: 'inline' }} className={ 'deleteTag' } onClick={this.props.removeTag}></button>);
    }
    return (
      <div className= { 'tagPill' }>
      {this.props.tag}
      {button}
      </div>
    );
  }

}

Tag.propTypes = {
  readOnlyPredicates: PropTypes.object,
  predicate: PropTypes.string,
  tag: PropTypes.string.isRequired,
  removeTag: PropTypes.func
};


export default Tag;
