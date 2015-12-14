import React from 'react';

class Tag extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className= { 'tagPill' }>
      {this.props.tag}
      <button style={{ display: 'inline' }} className={ 'deleteTag' } onClick={this.props.removeTag}></button>
      </div>
    );
  }

}

export default Tag;
