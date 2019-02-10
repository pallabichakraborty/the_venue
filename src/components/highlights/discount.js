import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import PurchaseButton from '../utils/purchaseButton'

class Discount extends Component {
    state= {
        discountStart:0,
        discountEnd: 30
    }

    percentage =() => {
        if(this.state.discountStart< this.state.discountEnd)
        {
            this.setState({
                discountStart:this.state.discountStart+1
            })
        }
    }

    componentDidUpdate =() => {
        setTimeout(() => {
            this.percentage()
        },30)
    }
    render() {
        return (
           <div className="center_wrapper">
                <div className="discount_wrapper">
                <Fade onReveal={()=> this.percentage()}>
                        <div className="discount_percentage">
                                <span>{this.state.discountStart}%</span>
                                <span>OFF</span>
                        </div>
                </Fade>
                <Slide>
                        <div className="discount_description">
                                <h3>Purchase tickets before June 20</h3>
                                <p>Mauris varius elit quis felis venenatis ullamcorper. Sed in erat et elit consequat dictum non sit amet orci. Suspendisse nec condimentum tortor, non lacinia enim. Etiam felis tellus, fermentum sed condimentum sit amet, dapibus condimentum tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer lorem neque, dignissim quis ultrices sit amet, fermentum ut tortor. Nulla a ante quam.</p>
                                <PurchaseButton text="Purchase Tickets" 
                                                 bck="#B07612"
                                                 color="white"
                                                 link="http://www.google.com"></PurchaseButton>
                        </div>
                </Slide>
                </div>
           </div>
            
        );
    }
}

export default Discount;