export interface TaskI {
    id: number;
    title: string;
    description: string;
    status: 'todo' | 'in-progress' | 'done';
}