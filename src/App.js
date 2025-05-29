import './App.css';
import Input from './components/ui/input/Input';
import Text from './components/ui/text/Text';
import Buttons from './components/ui/buttons/Buttons';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Text id="idLogin" text="LOGIN"/>
        <Input/>
        <Input/>
        <Buttons text={"esqueceu a senha?"}/>
        <Buttons className={"BtnEntrar"} text={"ENTRAR"}/>
        
      </header>
    </div>
  );
}

export default App;
