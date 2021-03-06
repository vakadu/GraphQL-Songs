import "./style/style.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
import SongCreate from './components/SongCreate';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';

const client = new ApolloClient({
    dataIdFromObject: o => o.id // o means object
});

const Root = () => {
  return (
      <ApolloProvider client={client}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={SongList}/>
                <Route path="songs/new" component={SongCreate}/>
                <Route path="songs/:id" component={SongDetail}/>
            </Route>
        </Router>
      </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);

//ApolloClient interacts with graphql server on the backend, making request for data and storing that data locally when response comes back.
//ApolloClient is frontend

//ApolloProvider is glue between react and apollo world or (graphql)
