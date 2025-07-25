import React, { useState } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import useTaskStore from '../store/store';

const AddTaskForm = () => {
    const [name, setName] = useState("");
    const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");

    const {addTask} = useTaskStore();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(name.trim()) {
            addTask(name, frequency);
            setName("");
            setFrequency("daily");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
                <TextField 
                    label='Task name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter task name'
                    fullWidth
                    color="secondary"
                />
                <FormControl fullWidth>
                    <InputLabel color="secondary">Frequency</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={frequency}
                        label="Frequency"
                        onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}
                        color="secondary"
                    >
                        <MenuItem value="daily">Daily</MenuItem>
                        <MenuItem value="weekly">Weekly</MenuItem>
                    </Select>
                </FormControl>
                <Button type='submit' variant="contained" color="secondary" fullWidth sx={{ py: 1.5 }}>
                    Add Task
                </Button>
            </Box>
        </form>
    )
}

export default AddTaskForm
