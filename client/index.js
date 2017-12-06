import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';

import SongList from './components/SongList';

const client = new ApolloClient({});

const Root = () => {
  return (
      <ApolloProvider client={client}>
        <div>
          <SongList/>
        </div>
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
