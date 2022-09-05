import {Grid} from './components/grid';

const randomColor = () => {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  return `#${color}`;
};

const Box = () => {
  return (
    <div
      style={{
        backgroundColor: randomColor(),
      }}
    >
      Box
    </div>
  );
};

function App() {
  return (
    <div>
      <Grid>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Grid>
    </div>
  );
}

export default App;
