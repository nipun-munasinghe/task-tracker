import { ThemeProvider, createTheme, Box, Container, Typography, CssBaseline } from '@mui/material';
import './App.css'
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Box
          sx={{
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
            p: 4,
            backgroundColor: 'background.paper',
          }}
        >
          <Typography variant='h3' component='h1' gutterBottom align='center' color="primary">
            Task Tracker
          </Typography>
          <AddTaskForm />
          <TaskList />
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
