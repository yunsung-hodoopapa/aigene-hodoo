import { Line, mixins } from 'react-chartjs-2';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

const ControllerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  justify-content: center;
`;

const Chart = () => {
  const dataState = useSelector((state) => state.data);
  const dataset = dataState.map((item) => item.results[0].data).flat();
  const period = dataset.map((item) => item.period);
  const ratio = dataset.map((item) => item.ratio);
  const age = `${dataset[0].group}대`
  console.log(period);
  return (
    <ControllerWrapper>
      <Line
        data={{
          labels: period,
          datasets: [
            {
              label: age,
              data: ratio,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            },
          ],
        }}
        width={50}
        height={25}
        options={{ maintainAspectRatio: false }}
      />
    </ControllerWrapper>
  );
};

export default Chart;
