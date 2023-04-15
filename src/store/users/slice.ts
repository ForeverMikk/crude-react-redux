import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const DEFAULT_STATE = [
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
// DE esta forma se estaria autoinvocando la funcion y setearia el valor indicado
const initialState: UserWithId[] = (() => {
    const persistendState = localStorage.getItem("__redux__state__");

    if(persistendState) {
        return JSON.parse(persistendState).users;
    }
    return DEFAULT_STATE;
})();

// Tambien se podria de hacer una forma mas tradicional
// let initialState: UserWithId[] = DEFAULT_STATE;
// const persistendState = localStorage.getItem("__redux__state__");
// if (persistendState){
//     initialState = JSON.parse(persistendState).users;
// }

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