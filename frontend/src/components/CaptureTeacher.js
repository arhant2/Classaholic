import React from 'react';
import Iframe from 'react-iframe';

export default function CaptureTeacher() {
  return (
    <Iframe
      url="https://shikshak.gitaalekhyapaul.xyz/teacher"
      id="videop"
      allow="camera https://shikshak.gitaalekhyapaul.xyz; microphone https://shikshak.gitaalekhyapaul.xyz"
    />
  );
}
