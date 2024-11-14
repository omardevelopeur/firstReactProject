import Intro from "./components/intro/intro";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Cont from "./components/Contact/contact";
import Fot from "./components/Footer/footer";
function App() {
  return (
  <div className="App">
  <Navbar />
  <Intro />
  <Skills />
  <Works />
  <Cont />
  <Fot />
  </div>
  );
}

export default App;
