import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class SideDrawer extends Component {
    render() {
        return (
            <Drawer anchor="right" open={this.props.open} onClose={this.props.onClose(false)}>
                <List component="nav">
                    <ListItem button onClick = {()=> console.log("Featured")}>Event starts in</ListItem>
                    <ListItem button onClick = {()=> console.log("Venue")}>Venue NFO</ListItem>
                    <ListItem button onClick = {()=> console.log("Highlights")}>Highlights</ListItem>
                    <ListItem button onClick = {()=> console.log("Pricing")}>Pricing</ListItem>
                    <ListItem button onClick = {()=> console.log("Location")}>Location</ListItem>
                </List>
           </Drawer>
        );
    }
}

export default SideDrawer;