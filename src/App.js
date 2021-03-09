import React from 'react';
import './index.scss';
import Notfication from './componete/notfication/index';
import Dashboerd from './componete/dashboerd/index';
class App extends React.Component {
   notfication = () =>{
    const spannotfication = document.querySelector('.span-notfication');
    const notficationdiv = document.querySelector('.notfication-div');
    spannotfication.classList.toggle('fade-in');

    if(spannotfication.classList.contains('fade-in')){
      notficationdiv.classList.add('fade-in');
      notficationdiv.classList.remove('fade-out');

    }else{
      notficationdiv.classList.remove('fade-in');
      notficationdiv.classList.add('fade-out');
    }
  }
  Transfer = () =>{
    const pop = document.querySelector('.pop-one');
    if(!pop.classList.contains('fade-in-pop')){
      pop.classList.add('fade-in-pop');
      pop.classList.remove('fade-out-pop');
    }
  }
  pop = () =>{
    const pop = document.querySelector('.pop-one');
    if(pop.classList.contains('fade-in-pop')){
      pop.classList.add('fade-out-pop');
      pop.classList.remove('fade-in-pop');
    }

  }
  buttoPop = () =>{
    const configrationemail =document.querySelector('.configration-email');
    const buttonpop = document.querySelector('.button-pop');
    if(!buttonpop.classList.contains('fade-in-button-pop')){
      buttonpop.classList.add('fade-out-button-pop');
      configrationemail.classList.add('fade-in-button-pop');
    }

  }
  final = () =>{
    const pop = document.querySelector('.pop-one');
    const buttonpop = document.querySelector('.button-pop');
    const configrationemail =document.querySelector('.configration-email');
    if(configrationemail.classList.contains('fade-in-button-pop')){
      configrationemail.classList.remove('fade-in-button-pop');
      buttonpop.classList.remove('fade-out-button-pop');
      pop.classList.remove('fade-in-pop');
    }
  }
  
  render(){
    return (
      <div className="App">
          <Notfication notifcation = {this.notfication}/>
          <Dashboerd Transfer = {this.Transfer} pop = {this.pop} buttoPop = {this.buttoPop} final = {this.final}/> 
      </div>
    )
  }

}

export default App;
