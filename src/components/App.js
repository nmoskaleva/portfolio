import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import GlobalStyles from './styled/GlobalStyle';
import { HomeLayout, PatternedLayout, PlainLayout } from './Layouts';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import ThankYou from './ThankYou';

function App() {
  function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) => (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        )}
      />
    );
  }

  return (
    <Router>
      <GlobalStyles />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames='page' timeout={500}>
              <Switch location={location}>
                <RouteWrapper
                  exact
                  path='/about'
                  component={About}
                  layout={PatternedLayout}
                />
                <RouteWrapper
                  exact
                  path='/projects'
                  component={Projects}
                  layout={PlainLayout}
                />
                <RouteWrapper
                  exact
                  path='/skills'
                  component={Skills}
                  layout={PatternedLayout}
                />
                <RouteWrapper
                  exact
                  path='/contact'
                  component={Contact}
                  layout={PatternedLayout}
                />
                <RouteWrapper
                  exact
                  path='/thank-you'
                  component={ThankYou}
                  layout={HomeLayout}
                />
                <RouteWrapper
                  exact
                  path='/'
                  component={Home}
                  layout={HomeLayout}
                />
                <Route exact path='/' component={Home} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  );
}

export default App;
