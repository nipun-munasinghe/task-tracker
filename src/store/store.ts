import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware';

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
    removeTask: (id: number) => void;
    toggleTask: (id: number, date: string) => void;
}

const useTaskStore = create<TaskState>()(
    devtools(persist((set) => {
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
        removeTask: (id) => set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
        })),
        toggleTask: (id, date) => set((state) => ({
            tasks: state.tasks.map((task) => task.id === id
                ? {
                    ...task,
                    completedDates: task.completedDates.includes(date)
                        ? task.completedDates.filter((d) => d !== date)
                        : [...task.completedDates, date],
                }
                : task
            )
        }))
    };
}, {
    name: 'tasks-local'
}
)));

export default useTaskStore;