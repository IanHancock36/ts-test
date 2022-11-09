import React, { ReactElement, ReactNode } from "react";
import logo from "./logo.svg";
import "./App.css";

// Conventional props destructuring

function Heading({ title }: { title?: string }) {
  return <h1>{title}</h1>;
}

// Children Title
function HeadingWithContent({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  // React Node will take any thing
  return <h1>{children}</h1>;
}

// Default props
const defaultContainerProps = {
  heading: <strong>My Heading</strong>,
};
type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;
function Container({ heading, children }: ContainerProps): ReactElement {
  // React Node will take any thing

  // Functional Props
  function TextWithNumber({
    children
  }: {
    children: (digits: number) => ReactNode;
  }) {
    const [state, setState] = React.useState<number>(1);
    return (
      <div>
        <div>{children(state)}</div>
        <div>
          <button onClick={() => setState(state + 1)}>Add</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>{heading}</h1>
      <h1>{children}</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Heading title="Hello There" />
      <HeadingWithContent>COOL</HeadingWithContent>
      <Container>neet</Container>
      <TextWithNumber>
        {(digits: number) => <div>Today is {digits}</div>}
      </TextWithNumber>
    </div>
  );
}
Container.defaultProps = defaultContainerProps;
export default App;
