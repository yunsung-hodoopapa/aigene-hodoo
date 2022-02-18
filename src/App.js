import './App.css';
import SearchController from './components/dataController/SearchController';
import Chart from './components/chartSection/Chart';
import styled from 'styled-components';
import Layout from './views/Layout';

const App = () => (
  <>
    <Layout>
      <SearchController />
      <Chart />
    </Layout>
  </>
);

export default App;
