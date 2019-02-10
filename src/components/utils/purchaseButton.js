import React from 'react';
import Button from '@material-ui/core/Button';
import Ticket_Icon from '../../resources/images/icons/ticket.png'

const purchaseButton = (props) => {
    return (
        <Button
             href={props.link}
             variant="contained"
             size="smal"
             style ={{
                 background: `${props.bck}`,
                 color: `${props.color}`
             }}>
            <img src={Ticket_Icon}
                 className="iconImage"
                 alt="icon_button"
            ></img>
            {props.text}
        </Button>
    );
};

export default purchaseButton;