import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import Header from "./components/Header";

const client = new ApolloClient({
  url: process.env.REACT_APP_DEV_APOLLO_URL,
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <>
    <ApolloProvider client={client}>
      <Header />
      <div className='container'>
        <h1>Hello World</h1>
      </div>
    </ApolloProvider>
    </>
  )
}

export default App;
