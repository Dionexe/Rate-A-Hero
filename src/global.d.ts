// src/global.d.ts

import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Add typings for HTML elements used in your components
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
      // Add more elements as needed
    }
  }
}
