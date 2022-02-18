import './App.css';
import SearchController from './components/dataController/SearchController';
import Chart from './components/chartSection/Chart';
import styled from 'styled-components';
import Layout from './views/Layout';



const TempBlock = styled.div`
  width: 50%;
  background-color: white;
  border: 1px solid green;
`;

const App = () => (
  <>
    <Layout>
      <SearchController />
      <Chart />
    </Layout>
  </>
);

export default App;
