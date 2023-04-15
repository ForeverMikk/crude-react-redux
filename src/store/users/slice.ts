import { createSlice, type PayloadAction } from '@reduxjs/toolkit';


export type UserId = string;

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
    reducers: {
        deleteUserById: (state, action: PayloadAction<UserId>) => {
            const id = action.payload;
            return state.filter((user) => user.id !== id);
        }
    }
});

export default userSlice.reducer;
export const { deleteUserById } = userSlice.actions;