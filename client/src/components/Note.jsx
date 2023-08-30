import React, { useEffect, useState } from "react";
import {
  ContentState,
  convertFromHTML,
  convertFromRaw,
  EditorState,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { draftToHtml } from "draftjs-to-html";
import { useLoaderData } from "react-router-dom";

function Note() {
  const { note } = useLoaderData();

  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty();
  });

  const [rawHTML, setRawHTML] = useState(note.content);

  useEffect(() => {
    const blocksFromHTML = convertFromHTML(note.content);
    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    setEditorState(EditorState.createWithContent(state));
  }, [note.id]);

  const handleOnChange = (e) => {
    setEditorState(e);
    setRawHTML(draftToHtml(convertFromRaw(e.getCurrentContent())));
  };

  useEffect(() => {
    setRawHTML(note.content);
  }, [note.content]);

  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleOnChange}
        placeholder="write sthing"
      />
    </div>
  );
}

export default Note;
