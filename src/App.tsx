import React, { ReactElement, ReactNode } from 'react';
import logo from './logo.svg';
import './App.css';

// Conventional props destructuring 

function Heading({title}: {title?: string}){
  return(
    <h1>{title}</h1>
  )
}

// Children Title 
function HeadingWithContent({children}: {children: ReactNode}): ReactElement{
  // React Node will take any thing
  return(
    <h1>{children}</h1>
  )
}

function App() {
  return (
    <div className="App">
      <Heading title='Hello There'/>
      <HeadingWithContent>COOL</HeadingWithContent>
    </div>
  );
}

export default App;
