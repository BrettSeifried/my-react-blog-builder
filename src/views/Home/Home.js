import React from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';
import { useState } from 'react';
import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [font, setFont] = useState('font');
  const [align, setAlign] = useState('align');
  const [text, setText] = useState('');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview
        {...{
          title,
          setTitle,
          subtitle,
          setSubtitle,
          font,
          setFont,
          align,
          setAlign,
          text,
          setText,
        }}
      />
      <Editor
        {...{
          title,
          setTitle,
          subtitle,
          setSubtitle,
          font,
          setFont,
          align,
          setAlign,
          text,
          setText,
        }}
      />
    </main>
  );
}
