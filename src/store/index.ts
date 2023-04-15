import { configureStore } from "@reduxjs/toolkit";

import usersReducer from './users/slice';

// este middleware va a ser el encargado de que persistan los datos a traves de la ejecucion
const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
    console.log(store.getState());
    console.log(action);
    next(action);
    console.log(store.getState());
}

export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
    middleware: [persistanceLocalStorageMiddleware]
})


// Saca el tipo de dato que retorna la funcion en automatico
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch