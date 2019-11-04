import React from "react";
import QuillReaderComponent from "../components/QuillReaderComponent";

class ArticlePage extends React.Component {
  state = {};

  render() {
    return (
      <div className="editor container-fluid">
        <QuillReaderComponent content="<p>sadfas</p><p><br></p>" />
      </div>
    );
  }
}

export default ArticlePage;
