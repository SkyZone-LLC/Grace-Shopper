import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import UserPageDetails from './UserPage-Details'
import UserPageEdits from './UserPage-Edits'
import MyOrders from './MyOrders'
import CreateReview from './CreateReview'
import { } from '../store'

class UserPage extends Component {

  render(){
    const {user, isLoggedIn} = this.props

  return (
    <div className='signup-page'>
      <div className="page-header header-filter">
    	  <div className="container">
			    <div className="row">
    			  <div className="col-md-12">

					  <div className="card card-signup">

					<nav className="navbar navbar-primary">
							<div className="navbar-header">
								<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#example-navbar-primary">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
								<a className="navbar-brand" href="#pablo">Welcome {user.name}</a>
							</div>

							<div className="collapse navbar-collapse" id="example-navbar-primary">
								<ul className="nav navbar-nav navbar-right">
									<li className="active">
                    <Link to="/myaccount">
                        <i className="material-icons">account_circle</i> Profile
                    </Link>
		              </li>
		              <li>
                    <Link to="/myaccount/orders">
                      <i className="material-icons">explore</i>Orders
                    </Link>
		              </li>
		              <li>
		              <Link to="/myaccount/edit" >
										<i className="material-icons">settings</i>Settings
                    </Link>
                  </li>
								</ul>
						</div>
					</nav>

                {isLoggedIn ?
                  <div>
                    <Switch>
                      <Route exact path="/myaccount" render={() => <UserPageDetails user={user} />} />
                      <Route exact path="/myaccount/orders" render={() => <MyOrders user={user} />} />
                      <Route path="/myaccount/edit" render={() => <UserPageEdits user={user} />} />
                      <Route path="/myaccount/CreateReview/:productId" render={() => <CreateReview />} />
                    </Switch>
                  </div>
                  :
                  <h4>Please sign up or login to see your account</h4>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
		</div>
  )
}}

const mapStatetoProps = (state) => {
  return {
    user: state.user,
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
  }
}

export default connect(mapStatetoProps, mapDispatch)(UserPage)
