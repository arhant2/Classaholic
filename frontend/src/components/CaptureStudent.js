import React from 'react';
import Iframe from 'react-iframe';

export default function CaptureStudent() {
  return (
    <Iframe
      url="https://shikshak.gitaalekhyapaul.xyz/student"
      id="videop"
      allow="camera https://shikshak.gitaalekhyapaul.xyz; microphone https://shikshak.gitaalekhyapaul.xyz"
    />
  );
}
