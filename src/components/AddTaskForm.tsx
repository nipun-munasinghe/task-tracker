import React, { useState } from 'react'
import { Box, TextField } from '@mui/material';

const AddTaskForm = () => {
    const [name, setName] = useState("");
    const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");
  return (
    <form>
        <Box>
            <TextField label='Task name'/>
        </Box>
    </form>
  )
}

export default AddTaskForm