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
    addTask:(name: string, frequency: "daily"|"weekly") => void;
}

const useTaskStore = create<TaskState>((set) => {
    return {
        tasks: [],
        addTask: (name, frequency) => set((state) => {
            return {
                tasks:[...state.tasks, {
                    id: Date.now(),
                    name,
                    frequency,
                    completedDates: [],
                    createdAt: new Date().toISOString(),
                }],
            };
        }),
    };
});

export default useTaskStore;