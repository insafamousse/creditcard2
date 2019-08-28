import React from 'react';
import './App.css'
 
function Val(){
    return (
        <div className="Val1">
            <div className="Row">     
            <div className="col-6"  > 
            <div className="Val2"> 
     <input type ="test"  name="number" onChange={this.numberChange.bind(this)} ></input> 
     </div> 
     <div className="Val3">   
     <input type ="test" name ="name" onchange={this.nameChange.bind(this)} ></input> 
      </div>
      <div className="Val4">
     <input type ="test" number ="num"  onchange={this.monthChange.bind(this)}></input> 
     </div>
     <input type="test" day ="name" onchange={this.dayChange.bind(this)}></input>
       </div> 
       </div> 
        
</div> 
   
    );
} 


export default Val ; 
