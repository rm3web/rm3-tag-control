import React from 'react';

class Tag extends React.Component {

  constructor() {
    super();
  }

  render() {
    const name = this.props.predicate;
    let description = 'plain text tag';
    if (this.props.predicates) {
      if (this.props.predicates.hasOwnProperty(this.props.predicate)) {
        description = this.props.predicates[this.props.predicate].name;
      }
    }
    return (
      <div className= { 'predicatePill' }>
      <abbr title={description} >
      {name}
      </abbr>
      </div>
    );
  }

}

export default Tag;
