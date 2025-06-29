import { Box, Button, Paper, Typography } from '@mui/material';
import useTaskStore from '../store/store';
import { CheckCircle, Delete as DeleteIcon } from '@mui/icons-material';

const TaskList = () => {
    const { tasks, removeTask, toggle1Task } = useTaskStore();
    const today = new Date().toISOString().split('T')[0];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {tasks.map((task) => (
                <Paper key={task.id} elevation={4} sx={{ p: 2, backgroundColor: 'background.paper' }}>
                    <Box 
                        sx={{ 
                            display: 'flex', 
                            flexDirection: { xs: 'column', sm: 'row' }, 
                            alignItems: { sm: 'center' }, 
                            justifyContent: 'space-between',
                            gap: 2 
                        }}
                    >
                        <Box>
                            <Typography 
                                variant='h6'
                                color={task.completedDates.includes(today) ? 'success.main' : 'primary.main'}
                            >
                                <CheckCircle sx={{ verticalAlign: 'middle', mr: 1 }} />
                                {task.name}
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                {task.frequency}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                            <Button variant='outlined' onClick={() => toggle1Task(task.id, today)} color={task.completedDates.includes(today) ? 'success' : 'primary'}>
                                {task.completedDates.includes(today) ? "Completed" : "Mark as Completed"}
                            </Button>
                            <Button variant='outlined' color='error' startIcon={<DeleteIcon />} onClick={() => removeTask(task.id)}>
                                Remove
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            ))}
        </Box>
    );
};

export default TaskList;
