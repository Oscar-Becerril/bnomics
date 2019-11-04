import React from "react";
import QuillEditorComponent from "../components/QuillEditorComponent";

class EditorPage extends React.Component {
  state = {
    value: ""
  };

  // onChangeValueHandler = val => {
  //   this.setState({ value: val.target.value });
  // };

  onHandleQuillSubmit = async input => {};

  render() {
    return (
      <div className="editor container-fluid">
        <form action="">
          <QuillEditorComponent
          //value={value}
          // onChangeValue={this.onChangeValueHandler}
          />
        </form>
      </div>
    );
  }
}

export default EditorPage;
