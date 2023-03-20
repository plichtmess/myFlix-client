import { createRoot } from "react-dom/client";

//import MainView component
import { MainView } from './components/main-view/main-view';

// import statement to indicate that `./index.scss` needs to be bundled
import "./index.scss";

// main component (will eventually use all the others)
const App = () => {
  return <MainView />;
};

// finds the root of the app
const container = document.querySelector('#root');
const root = createRoot(container);

// tells react to render the app in the root DOM element
root.render(<App />);