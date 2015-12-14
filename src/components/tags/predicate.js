import React from 'react';

class Tag extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className= { 'predicatePill' }>
      <abbr title={this.props.predicate ? this.props.predicate.name : 'plain text tag'} >
      {this.props.predicate ? this.props.predicate.id : 'plain'}
      </abbr>
      </div>
    );
  }

}

export default Tag;
