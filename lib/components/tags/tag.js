import React from 'react';

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
      {this.props.type}
      {button}
      </div>
    );
  }

}

export default Tag;
