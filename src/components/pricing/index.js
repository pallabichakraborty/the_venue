import React, { Component } from 'react';
import PurchaseButton from '../utils/purchaseButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
    state= {
        prices: [100,150,250],
        positions: ['balcony','medium','star'],
        desc: [
            'Fusce vel turpis venenatis, placerat neque a, venenatis nibh. Mauris pharetra efficitur purus sit amet cursus. Duis pellentesque',
            'Praesent semper ornare turpis at sollicitudin. Etiam posuere erat suscipit massa bibendum, eget venenatis lacus feugiat. Duis ac',
            'Vestibulum velit lectus, pretium nec augue id, tempor varius leo. Nullam ac tristique est, vitae mattis quam. Ut dignissim tellus'
        ],
        linkTo: ['https://www.lohud.com/story/news/local/westchester/2019/02/09/chinese-new-year-celebrated-suny-purchase-college/2825015002/',
                 'https://www.theadvocate.com/new_orleans/news/article_3c815204-2a31-11e9-a119-7fec13ca21bd.html',
                 'http://www.wfmz.com/news/poconos-coal/man-attempts-to-use-counterfeit-money-to-make-purchase/1010053361'],
        delay: [500, 0, 500]
    }

    showBoxes = () => {
        return (
            this.state.prices.map((price,index) => {
                return (
                    <Zoom key={index} delay={this.state.delay[index]}>
                        <div className="pricing_item">
                        <div className="pricing_inner_wrapper">
                            <div className="pricing_title">
                                <span>${price}</span>
                                <span>{this.state.positions[index]}</span>
                            </div>
                            <div className="pricing_description">
                                {this.state.desc[index]}
                            </div>
                            <div className="pricing_button">
                                <PurchaseButton text="Purchase Tickets" 
                                                bck="#B07612"
                                                color="white"
                                                link={this.state.linkTo[index]}>
                                </PurchaseButton>

                            </div>
                        </div>
                      </div>
                    </Zoom>
                    
                )
            })
        )
    }
    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Pricing;