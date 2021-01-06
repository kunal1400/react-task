import React, { Component } from 'react'
import StageEight from './Components/StageEight';
import StageNine from './Components/StageNine';
import { withRouter, Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom';
import {TransitionGroup, CSSTransition } from 'react-transition-group';

class RouterMap extends React.PureComponent {
    constructor (props, context) {
      super(props, context)
      this.state = {
        prevDepth: this.getPathDepth(props.location),
      }
    }

    getPathDepth (location) {
      return (location || {} ).pathname.split('/').length
    }

    componentWillReceiveProps () {
      this.setState({ prevDepth: this.getPathDepth(this.props.location) })
    }

    render () {
        return (
            <Router>
                <Route render={ ({ location }) =>
                    (<TransitionGroup>
                        <CSSTransition
                            key={ location.pathname.split('/')[1] }
                            timeout={ 500 }
                            classNames={ this.getPathDepth(location) - this.state.prevDepth ? 'pageSliderLeft' : 'pageSliderRight' } mountOnEnter={ true } unmountOnExit={ true }
                        >
                          <Switch location={ location }>
                              <Route path='/' exact component={ StageEight } />
                              <Route path='/stage-nine' component={ StageNine } />
                          </Switch>
                        </CSSTransition>
                    </TransitionGroup>)
                }
                />
            </Router>
        )
    }
}

export default withRouter(RouterMap)