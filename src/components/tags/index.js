import React from 'react';
import Tag from './tag';
import Predicate from './predicate';

class Tags extends React.Component {

  constructor(props) {
    super(props);
    let tags = props.tags;
    if (!tags) {
      tags = [];
    }
    this.state = {
      tags: tags,
    };
  }

  removeTag(tag) {
    this.state.tags.splice(tag, 1);
    this.setState({tags: this.state.tags});
  }

  addTag(tag) {
    this.state.tags.push(tag);
    this.setState({tags: this.state.tags});
  }

  render() {
    return (
      <div>{ this.state.tags.map(
        (tag, idx) => (
          <span key={idx}>
          <Predicate predicate={tag.predicate} key={idx + 'p' } />
          <Tag removeTag={this.removeTag.bind(this, idx)} key={idx + 't'} tag={tag.tag} />
          </span>
        )
      ) }
      </div>
    );
  }

}

export default Tags;
