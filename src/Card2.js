import React from 'react';
import puce from './img/puce.jpg'
import mastercard from './img/mastercard.jpg'
import './App.css'
function Card2() {
    return (<div className="card-name">
        <center >
            <h1> CREDIT CARD </h1>
</center>
        <div className='credit-card__logo' >
            <img className='logo' src={puce} width="60" alt="logo" />
            <div className='credit'>
                
                <h2 className="num">7253325b7895l245 </h2>
                <div className='cardholder'>
                    <div className='date'>
                    <h2> 5422 </h2>
                    <p> Month/Years</p>
                    <h1>  11/50</h1>
                    <img className='mastercard' src={mastercard} width="60" alt="card" />
                    </div>
                    <h2 className=" color">CARDHOLDER</h2>
                </div>
                
            </div>
            </div>

</div>)



}
export default Card2 ;