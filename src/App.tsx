import { Box, Container, Typography } from '@mui/material';
import './App.css'
import useTaskStore from './store/store';
import AddTaskForm from './components/addTaskForm';

function App() {
  // const store = useTaskStore();
  // console.log(store.tasks);

  return (
    <Container>
      <Box>
        <Typography variant='h2' component='h1' gutterBottom align='center'>
          Task Tracker
        </Typography>
        {/* form */}
        <AddTaskForm/>
        {/* list */}
        {/* stats */}
      </Box>
    </Container>
  )
}

export default App