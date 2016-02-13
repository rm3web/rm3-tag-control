import React from 'react';
import Tag from './tag';
import Predicate from './predicate';
import { LinkedDataBox } from 'linked-data-box';

class Tags extends React.Component {

  constructor(props) {
    super(props);
    let tags = props.tags;
    if (!tags) {
      tags = new LinkedDataBox();
    }
    this.state = {
      tags: tags,
    };
  }

  removeTag(predicate, value) {
    this.state.tags.deleteTagId(predicate, value);
    this.setState({tags: this.state.tags});
  }

  render() {
    const arr = [];
    let readOnlyPredicates = {};
    if (this.props.readOnlyPredicates) {
      readOnlyPredicates = this.props.readOnlyPredicates;
    }
    this.state.tags.iterateTags(
      (pred, tag, idx) => {
        arr.push(
        <span key={idx}>
        <Predicate predicate={ pred }
          predicates={ this.props.predicates } key={idx + 'p' } />
        <Tag removeTag={ this.removeTag.bind(this, pred, tag['@id']) }
          key={idx + 't'} tag={tag['@id']} predicate={ pred } readOnlyPredicates={readOnlyPredicates} />
        </span>);
      }
    );
    return (
      <div>{ arr }
      </div>
    );
  }

}

export default Tags;
