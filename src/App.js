import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './counter/Counter';
import Compon from './compon/Compon';

class App extends React.Component {
  state = {
      count: 0 , 
      text: 'test'
  }

  render(){
    const {count, text} = this.state;

    return(
      <>

      <Counter 
      count = {count}
      countDown={ ()=> this.setState( {count: count -1})}
      countUp={()=> this.setState( {count: count +1 })}
      />

      <Compon
     text={text}
     inputChange={(value)=> this.setState({text: value}) }
      />
      
      </>
    )
  }


}

export default App;
