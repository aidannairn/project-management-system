import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Clients from './components/Clients';

import AddClientModal from './components/AddClientModal';
import Header from "./components/Header";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming
          }
        },
        projects: {
          merge(existing, incoming) {
            return incoming
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: process.env.REACT_APP_DEV_APOLLO_URI,
  cache
})

const App = () => {
  return (
    <>
    <ApolloProvider client={client}>
      <Header />
      <div className='container'>
        <AddClientModal />
        <Clients />
      </div>
    </ApolloProvider>
    </>
  )
}

export default App;
