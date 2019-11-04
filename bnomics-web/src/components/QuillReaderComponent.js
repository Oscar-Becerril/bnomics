import React from "react";
import ReactQuill, { Quill } from "react-quill";

const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida"
];
Quill.register(Font, true);

class QuillReaderComponent extends React.Component {
  state = {
    editorHtml:
      "<p><b>ghasdfas</b>hasdfsadf</p><p>ha</p><p>ssad</p><p>gah</p><p>sad</p><p>f</p><p><br></p><p>as</p><p><br></p><p>ha</p><p>sd</p><p>f</p>",
    text: ""
  };

  componentDidMount = () => {
    this.handleParse();
  };

  handleParse = () => {
    //const { content } = this.props;
    // const html = JSON.parse(
    //   "<p>ghasdfashasdfsadf</p><p>ha</p><p>ssad</p><p>gah</p><p>sad</p><p>f</p><p><br></p><p>as</p><p><br></p><p>ha</p><p>sd</p><p>f</p>"
    // );
    //this.setState({ editorHtml: html });
  };

  modules = {
    toolbar: false
  };

  static formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color"
  ];

  render() {
    return (
      <>
        <div className="text-reader">
          <ReactQuill
            value={this.state.editorHtml}
            onChange={this.handleChange}
            placeholder={this.props.placeholder}
            modules={this.modules}
            formats={this.formats}
            bounds={".reader"}
            readOnly
            //theme="snow"
          />
        </div>
      </>
    );
  }
}

export default QuillReaderComponent;
