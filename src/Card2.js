import React from 'react';
import puce from './img/puce.jpg'
import mastercard from './img/mastercard.jpg'
import './App.css' 
class HelloUser extends React.Component {
    constructor() {   
      super()
      this.state = {
        name: 'xxxxx xxx',
        number: '0000000000000000',
        month: 'xx',
        day: 'xx',
        ccv: 'CCV'
      }
    }
    numberChange(n) {
        this.setState({
          number: n.target.value 
        });
      }
      nameChange(c) {
        this.setState({
          name: c.target.value
        });
      } 
      monthChange(m) {
        this.setState({ 
         month: m.target.value
        });
      }
      yearChange(m) {
        this.setState({ 
         month: m.target.value
        });
      }



      render() { 
            return (<div className="card-name">
        <center > 
            <h1> CREDIT CARD    </h1>
</center>
        <div className='credit-card__logo' >
            <img className='logo' src={puce} width="60" alt="logo" />
            <div className='credit'>
                
                <h2 className="num"> {this.state.number} </h2>
                <div className='cardholder' > {this.state.name} >
                    <div className='date'> {this.state.date} > 
                    <h2> 5422  </h2>
                    <p> Month/Year </p>
                    <h1>   {this.state.month}</h1>
                    <img className='mastercard' src={mastercard} width="60" alt="card" />
                    </div>
                    <h2 className=" color">CARDHOLDER</h2>
                </div>
                </div>
            </div>
            
            <div className="Val1">
            <div className="Row">     
            <div className="col-6"  > 
            <div className="Val2"> 
            <div className="Val3"> 
          
     <input type ="test"  name="number" onChange={(this.numberChange.bind(this))} ></input> 
     </div> 
    
     <input type ="test" name ="name" onChange={(this.nameChange.bind(this))} ></input> 
      </div>
      <div className="Val4">
     <input type ="test" number ="num"  onChange={(this.monthChange.bind(this))}></input> 
     </div>
     <input type="test" day ="name" onChange={(this.yearChange.bind(this))}></input>
       </div> 
       </div> 
  
</div>    
</div>  

 )
} 
} 
export default HelloUser ; 