import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchData } from "./redux/actions";
import { bindActionCreators } from 'redux';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import "./App.css";



class App extends Component {

  componentDidMount() {
    this.props.fetchData();
  }
/*<Card>{user.title}<br />
          {user.urlToImage}</Card><br />

          */

  
  render() {
    const users = this.props.user;
    return (
      <div className="root">
        <br /><br /><br />
        <b className="title">READ THE NEWS TODAY!</b>
        <div>
        {users.map(user => {
          return <div><br /><br /><br /><Card minWidth="275" variant="outlined" className="card-root">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
             <b> {user.author}</b>
            </Typography><br />
            <Typography variant="h5" component="h2">
              {user.title}
            </Typography><br />
            <Typography marginBottom="12" color="textSecondary">
              {user.description}
            </Typography><br />
            <Typography color="textSecondary">
              {user.publishedAt}
            </Typography>
          </CardContent>
        </Card></div>
        })}
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("State: ->  ", state.fetchDataReducer)
  return {
    user: state.fetchDataReducer.user,
    error: state.fetchDataReducer.error,
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);