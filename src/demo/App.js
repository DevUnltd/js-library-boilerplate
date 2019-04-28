import './css/App.css';
import Lib from './../lib';

class App {
  constructor(){
    let libInstance = new Lib();
    console.log("Demo loaded!", libInstance);
    this.demoArrowMethod();
  }

  demoArrowMethod = () => {
    console.log("Arrow methods will work");
  }
}

export default App;
