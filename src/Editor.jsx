import React, { useEffect, useRef } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

export default function Editor({ language, displayName, value, onChange }) {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayName}
        <button>C/O</button>
      </div>
      <ControlledEditor
        value={value}
        editorDidMount={handleEditorDidMount}
        onBeforeChange={(editor, data, value) => {
          onChange(value);
        }}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
          autofocus: true,
          indentUnit: 2,
          smartIndent: true,
          indentWithTabs: false,
          electricChars: true,
          scrollbarStyle: "native",
          viewportMargin: Infinity
        }}
      />
    </div>
  );
}