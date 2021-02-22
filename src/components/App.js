import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LayoutWithNav, HomeLayout } from './Layouts';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import GlobalStyle from './styled/GlobalStyle';

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
      <GlobalStyle />
      <Switch>
        <RouteWrapper
          exact
          path='/about'
          component={About}
          layout={LayoutWithNav}
        />
        <RouteWrapper
          exact
          path='/contact'
          component={Contact}
          layout={LayoutWithNav}
        />
        <RouteWrapper
          exact
          path='/projects'
          component={Projects}
          layout={LayoutWithNav}
        />

        <RouteWrapper
          exact
          path='/skills'
          component={Skills}
          layout={LayoutWithNav}
        />

        <RouteWrapper exact path='/' component={Home} layout={HomeLayout} />
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
