import './App.css';
import Header from "./components/header/Header"
import Body from "./components/body/Body"
import Footer from "./components/footer/Footer"
import { Provider } from './ContextApi/Context';
import Total from './components/TotalBalance/Total';

function App() {

  return (
  <Provider>
      <div className="App">
       
      <div className='main'>
      <p className='tag'>Expense Tracker</p>
          <Total/>
          <Header/>
          <Body/>
          <Footer/>
      </div>
      
    </div>
  </Provider>
   
  );
}

export default App;
