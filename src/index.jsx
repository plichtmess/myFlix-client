import { createRoot } from "react-dom/client";

//import MainView component
import { MainView } from './components/main-view/main-view';

import Container from "react-bootstrap/Container";

import "./index.scss";

// import "bootstrap/dist/css/bootstrap.min.css";

// import statement to indicate that `./index.scss` needs to be bundled

// main component (will eventually use all the others)
const App = () => {
  return (
    <Container>
      <MainView />
    </Container>
  );
};

// finds the root of the app
const container = document.querySelector('#root');
const root = createRoot(container);

// tells react to render the app in the root DOM element
root.render(<App />);