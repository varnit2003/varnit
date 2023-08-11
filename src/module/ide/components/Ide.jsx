import React from 'react'
import Editor from '@monaco-editor/react';
import {useRef} from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export const Ide = () => {
    const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }
  return (
    <>
    <Editor
        height="90vh"
        defaultLanguage="java"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
      />
      <Button variant="contained" endIcon={<SendIcon />}>
        Run
      </Button>
    </>
  )
}

