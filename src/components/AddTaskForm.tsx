import React, { useState } from 'react'
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const AddTaskForm = () => {
    const [name, setName] = useState("");
    const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");
  return (
    <form>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField 
                label='Task name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter task name'
                fullWidth
            />
            <FormControl fullWidth>
                <InputLabel>Frequency</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={frequency}
                    label="Frequency"
                    onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}
                >
                    <MenuItem value="daily">Daily</MenuItem>
                    <MenuItem value="daily">Weekly</MenuItem>
                </Select>
            </FormControl>
        </Box>
    </form>
  )
}

export default AddTaskForm