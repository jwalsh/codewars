const ShallowRenderer = require('react-test-renderer/shallow');

const Paragraph = (props) => <p>{props.children}</p>;
const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`;

const ShortParagraph = withTruncateParagraph(Paragraph);

function executeRender(jsx){
  const renderer = new ShallowRenderer();
  renderer.render(jsx);
  return renderer.getRenderOutput();
}

function joinChildren(children) {
  return children.join ? children.join('') : children;
}

// Here are some starter tests, remember TDD :)
describe("HOC withTruncateParagraph", () => {

  it("return a function", () => {
    Test.assertEquals(typeof ShortParagraph, 'function', "withTruncateParagraph should return a function");
  });

  it('should shorten length of text by 10 and add ellipsis ', () => {
    const result = executeRender(<ShortParagraph>{text}</ShortParagraph>);
    Test.assertEquals(joinChildren(result.props.children), 'Lorem Ipsu...', "Truncate to 10 characters with ellipsis at the end");
  });

});
