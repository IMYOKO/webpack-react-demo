import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Route, Redirect } from 'react-router-dom'

class AuthRouter extends Component {
    render() {  
        const { component: Component } = this.props
        const isLogged = localStorage.getItem("userName") === null ? false : true;
        return (
            <Route render={props => {
              return isLogged
                ? <Component {...props} />
                : <Redirect to="/login" />
            }} />
        )
      }
}

export default withRouter(AuthRouter);