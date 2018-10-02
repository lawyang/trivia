import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class Header extends Component {
  state = {
    value: 'trivia',
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
            <Tab value="trivia" label="Trivia" component={Link} to="/trivia"> Trivia </Tab>
            {/* <Tab value="contact" label="Contact" component={Link} to="/contact"> Contact </Tab> */}
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);