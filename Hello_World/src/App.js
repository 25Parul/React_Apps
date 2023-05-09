import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld/HelloWorld';
import ColorChanger from './components/ColorChanger/ColorChanger';
import ContactForm from './components/Form/ContactForm'


function App() {
  return (
    <div className="App">
      <HelloWorld />
      <ColorChanger />
      <ContactForm />

    </div>
  );
}

export default App;
