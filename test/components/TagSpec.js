import Tag from '../../src/components/tags/tag';
import { findDOMNode } from 'react-dom';

describe('Tag', () => {
  context('props.tag', () => {
    it('should display', () => {
      const $tag = $(<Tag tag='pretty pony' />).render();

      $tag.find(Tag).length.should.equal(1);

      $tag.find(Tag)[0].props.tag.should.equal('pretty pony')
    });

    it('should allow for deletion', (cb) => {
      function removeTagTest() {
        cb();
      }

      let detachedComp = TestUtils.renderIntoDocument(
        <Tag tag='pretty pony' removeTag={removeTagTest} />
      )
      let button = TestUtils.findRenderedDOMComponentWithTag(detachedComp, 'button')
      let buttonNode = findDOMNode(button);

      TestUtils.Simulate.click(buttonNode);

    });
  });
});
