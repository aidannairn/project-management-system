import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Clients from './components/Clients';

import Header from "./components/Header";

const client = new ApolloClient({
  uri: process.env.REACT_APP_DEV_APOLLO_URI,
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <>
    <ApolloProvider client={client}>
      <Header />
      <div className='container'>
        <Clients />
      </div>
    </ApolloProvider>
    </>
  )
}

export default App;
