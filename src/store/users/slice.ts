import { createSlice } from '@reduxjs/toolkit';

// TypeScript Config
export interface User {
    name: string,
    email: string,
    github: string
}

export interface UserWithId extends User {
    id: string
}

const initialState: UserWithId[] = [
    {
        id: '1',    
        name: "Peter Doe",
        email: "peterDoe@GamepadHapticActuator.com",
        github: "yazmanito"
    },
    {
        id: '2',    
        name: "John Doe",
        email: "johnDoe@GamepadHapticActuator.com",
        github: "johnDoe"
    },
    {
        id: '3',    
        name: "Maria Doe",
        email: "mariaDoe@GamepadHapticActuator.com",
        github: "yazmanito"
    },
]


export const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {}
});

export default userSlice.reducer;