import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import useTaskStore from '../store/store';
import { CheckCircle, Delete as DeleteIcon } from '@mui/icons-material';

const TaskList = () => {
    const { tasks, removeTask, toggleTask } = useTaskStore();
    const today = new Date().toISOString().split('T')[0];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
            {tasks.map((task) => (
                <Paper key={task.id} elevation={2} sx={{ p: 2 }}>
                    <Box 
                        sx={{ 
                            display: 'flex', 
                            flexDirection: { xs: 'column', sm: 'row' }, 
                            alignItems: { sm: 'center' }, 
                            justifyContent: 'space-between',
                            gap: 2 
                        }}
                    >
                        {/* Task Info */}
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
                        {/* Action Buttons */}
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                            <Button variant='outlined' onClick={() => toggleTask(task.id, today)}>
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
