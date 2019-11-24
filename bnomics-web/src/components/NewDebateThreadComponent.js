import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Form, Input, Notification, Checkbox } from "element-react";
import Button from "react-bootstrap/Button";
// import Form from 'react-bootstrap/Form'
import { createDebatePost } from "../graphql/mutations";
import ReactQuill, { Quill } from "react-quill";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ align: [] }],
  ["clean"] // remove formatting button
];

const initialState = {
  tags: ["Política", "Sociedad", "Economía"],
  selectedTags: [""],
  title: "",
  postContent: "",
  editorHtml: "",
  text: ""
};

class NewDebateThreadComponent extends React.Component {
  state = { ...initialState };

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

  handleAddDebate = async () => {
    try {
      const input = {
        title: this.state.title,
        tags: this.state.tags,
        postContent: this.state.postContent
      };
      const result = await API.graphql(
        graphqlOperation(createDebatePost, { input })
      );
      Notification({
        title: "Exito!",
        message: "El debate ha iniciado!",
        type: "error"
      });
    } catch (err) {
      Notification({
        title: "Error",
        message: "Ocurrio un problema al crear el debate",
        type: "error"
      });
    }
  };

  render() {
    const { tags, selectedTags, title, editorHtml } = this.state;

    return (
      <div className="flex-center">
        <h2 className="header">Crea un nuevo debate</h2>
        <div className="">
          <Form className="newDebateForm">
            <Form.Item label="Titulo del debate">
              <Input
                value={title}
                type="text"
                placeholder="Titulo del debate"
                onChange={title => this.setState({ title })}
              />
            </Form.Item>
            <Form.Item label="Contenido">
              <div className="text-editor">
                {/* <CustomToolbar /> */}
                <ReactQuill
                  value={editorHtml}
                  onChange={this.handleChange}
                  placeholder={"Escribe los argumentos iniciales"}
                  modules={this.modules}
                  formats={this.formats}
                  bounds={".editor"}
                  theme="snow"
                />
              </div>
            </Form.Item>
            <Form.Item>
              <Checkbox.Group value={selectedTags}>
                {tags.map((tags, index) => (
                  <Checkbox key={index} label={tags}></Checkbox>
                ))}
              </Checkbox.Group>
            </Form.Item>
            <Form.Item>
              <Button
                variant="primary"
                onClick={this.handleAddDebate}
                disabled={!title || !editorHtml}
              >
                Guardar
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default NewDebateThreadComponent;
