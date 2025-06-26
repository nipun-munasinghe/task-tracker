import { create } from 'zustand'

export interface Task {
    id: number;
    name: string;
    frequency: "daily" | "weekly";
    completedDates: string[];
    createdAt: string;
}

interface TaskState {
    tasks: Task[];
}

const useTaskStore = create<TaskState>(() => {
    return {
        tasks: []
    }
});

export default useTaskStore;