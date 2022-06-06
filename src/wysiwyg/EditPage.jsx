import React, { useState } from "react";
import {
  EditorState,
  ContentState,
  genKey,
  ContentBlock,
  List,
  Repeat,
  CharacterMetadata,
  convertFromHTML,
} from "draft-js";
import htmlToDraft from "html-to-draftjs";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./App.css";
import { convertToHTML } from 'draft-convert';

import { useCallback } from "react";

import { useRef } from "react";

const EditPage = () => {
  // var overview = "";

  // const contentDataState = ContentState.createFromBlockArray(
  //   convertFromHTML(overview)
  // );
  // const editorDataState = EditorState.createWithContent(contentDataState);

  // const [editorState, setEditorState] = useState(editorDataState);
  ////////////////////////////

  // const contentBlocksArray = input.map((word) => {
  //   return new ContentBlock({
  //     // key: genKey(),
  //     // type: "unordered-list-item",
  //     // characterList: new List(Repeat(CharacterMetadata.create(), word.length)),
  //     text: word,
  //   });
  // });

  // // console.log(contentBlocksArray);
  // const [editorState, setEditorState] = useState(
  //   EditorState.createWithContent(
  //     ContentState.createFromBlockArray(contentBlocksArray)
  //   )
  // );

  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createWithContent(
  //     ContentState.createFromText("Theodore")
  //   )
  // );

  const  [convertedContent, setConvertedContent] = useState(null);

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const inputs = ["man", "bird", "animal"];
 

  const onEditorStateChange2 = useCallback(
    (input) => {
      setEditorState(...inputs,input);
    },
    [editorState]
  );



  const handleEditorChange = (state) => {
    setEditorState(state);
    // convertContentToHTML();
  }
  // const convertContentToHTML = () => {
  //   let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
  //   setConvertedContent(currentContentAsHTML);
  // }

  const valueToEditor = useCallback(
    (value) => {
      const contentBlock = htmlToDraft(value);
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      return EditorState.createWithContent(contentState);
    },
    [editorState]
  );

  return (
    <div className="App">
      <header className="App-header">Rich Text Editor Example</header>
      {inputs.map((input) => (
        <>
          {/* <h4 key={input}>{input}</h4> */}
          <Editor
            // rawContentState={ContentState.createFromBlockArray(
            //   convertFromHTML(input))}
 
       
            editorState={valueToEditor(input)}
            onEditorStateChange={onEditorStateChange2}
            // defaultEditorState={input}
            // onChange={(editorState) => setEditorState(editorState)}
            // onChange={(e)=>onEditorStateChange2(e)}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
          />
        </>
      ))}
    </div>
  );
};
export default EditPage;

// import React, { Component } from "react";
// import { EditorState, convertToRaw } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";
// import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// export default class EditPage extends Component {
//   state = {
//     editorState: EditorState.createEmpty(),
//   };

//   array_one = [{"name":"theodore", "name2:":"john"}];
//   // array_two = ["theo", "sjohn"];
//   onEditorStateChange: Function = (editorState) => {
//     this.setState({
//       editorState,
//     });
//   };

//   render() {
//     const { editorState } = this.state;
//     return (
//       <div>
//         <Editor
//           editorState={editorState}
//           wrapperClassName="demo-wrapper"
//           editorClassName="demo-editor"
//           onEditorStateChange={this.onEditorStateChange}
//         />
//         <textarea
//           disabled
//           value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
//         />
//       </div>
//     );
//   }
// }
