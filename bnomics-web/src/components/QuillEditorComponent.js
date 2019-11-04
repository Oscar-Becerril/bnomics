import React from "react";
import ReactQuill, { Quill } from "react-quill";
import { Button } from "react-bootstrap";

// Add Sizes to whitelist
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

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ image: "" }],
  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"] // remove formatting button
];

class QuillEditorComponent extends React.Component {
  state = {
    editorHtml: "",
    text: ""
  };

  handleChange = html => {
    this.setState({ editorHtml: html });
    //console.log(JSON.stringify(html));
  };

  modules = {
    toolbar: toolbarOptions
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
        <div className="text-editor">
          {/* <CustomToolbar /> */}
          <ReactQuill
            value={this.state.editorHtml}
            onChange={this.handleChange}
            placeholder={this.props.placeholder}
            modules={this.modules}
            formats={this.formats}
            bounds={".editor"}
            theme="snow"
          />
        </div>
        <div className="row">
          <Button
            onClick={() => {
              console.log(JSON.stringify(this.state.editorHtml));
            }}
          >
            Sign In
          </Button>
        </div>
      </>
    );
  }
}

export default QuillEditorComponent;
