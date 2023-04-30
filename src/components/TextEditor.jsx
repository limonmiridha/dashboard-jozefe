import React, { useState } from 'react';
import { Editor } from 'primereact/editor';

const TextEditor = () => {
  const [text, setText] = useState('');
  return (
    <Editor
      value={text}
      onTextChange={(e) => setText(e.htmlValue)}
      className="h-36 md:h-48"
    />
  );
};

export default TextEditor;
