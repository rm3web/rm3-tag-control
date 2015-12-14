import Tag from '../../src/components/tags/tag';

describe('Tag', () => {
  context('props.tag', () => {
    it('should display', () => {
      const $tag = $(<Tag tag='pretty pony' />).render();

      $tag.find(Tag).length.should.equal(1);

      $tag.find(Tag)[0].props.tag.should.equal('pretty pony')
    });
  });
});
