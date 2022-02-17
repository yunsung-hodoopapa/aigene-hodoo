import './App.css';
import SearchController from './components/dataController/SearchController';
import styled from 'styled-components';
import Layout from './views/Layout';

const TempBlock = styled.div`
  width: 50%;
  background-color: white;
  border: 1px solid green;
`

const App = () => (
  <>
    <Layout>
      <SearchController />
      <TempBlock />
    </Layout>
  </>
);

export default App;
