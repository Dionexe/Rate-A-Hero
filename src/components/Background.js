import React, {useState} from "react";
import heros from './src/heros.jpg';

function Background() {
    return (
      <div style={{ 
        backgroundImage: `url(${heros})`, 
        backgroundSize: 'cover', 
        minHeight: '100vh'
      }}>
        <h1>This is a Background Component</h1>
      </div>
    );
  }
  
  export default Background;