import React, { Component } from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Landing from '../../page/Landing/Landing';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class Header extends Component {
  state = {
    value: 'home',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab value="home" label="Home" />
            <Tab value="two" label="Item Two" />
            <Tab value="three" label="Item Three" />
          </Tabs>
        </AppBar>
        {value === 'home' && <TabContainer><Landing /></TabContainer>}
        {value === 'two' && <TabContainer>About</TabContainer>}
        {value === 'three' && <TabContainer>Contact</TabContainer>}
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);