import { Remarkable } from "remarkable";
import PropTypes from "prop-types";

const md = new Remarkable();
const MarkdownPreview = ({ markdown }) => {
  return (
    <div
      className="content"
      dangerouslySetInnerHTML={{ __html: md.render(markdown) }}
    />
  );
};

MarkdownPreview.propTypes = {
  markdown: PropTypes.string,
};

export default MarkdownPreview;
