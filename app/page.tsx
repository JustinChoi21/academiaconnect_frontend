import React from 'react';
import { CSSProperties } from 'react';

export default function Home() {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>CS 615 User Design Interface Team Project</h1>
      <h2 style={subtitleStyle}>Academia Connect</h2>
      <a href="/submission" style={linkStyle}>submission</a>
    </div>
  );
}

const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  textAlign: 'center',
};

const titleStyle: CSSProperties = {
  fontSize: '2em',
  marginBottom: '0.5em',
};

const subtitleStyle: CSSProperties = {
  fontSize: '1.5em',
  marginBottom: '1em',
};

const linkStyle: CSSProperties = {
  fontSize: '1.2em',
  color: '#0070f3',
  textDecoration: 'underline',
  cursor: 'pointer',
};
