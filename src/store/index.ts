import { type Middleware, configureStore } from "@reduxjs/toolkit";
import { toast } from 'sonner'
import usersReducer from './users/slice';

// este middleware va a ser el encargado de que persistan los datos a traves de la ejecucion

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
    next(action);
    localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
}

const syncWithDatabaseMiddleware: Middleware = (store) => (next) => (action) => {
    const {type, payload} = action;
    
    // fase 1 del middleware
    console.log({type, payload});
    console.log(store.getState());
    next(action);

    if(type === 'users/deleteUserById') {
           fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
                method: "DELETE"
           })
           .then(res => {
            if(res.ok) toast.success(`Usuario ${payload} borrado correctamente`);
           })
           .catch((err) => {
            console.log(err)
           })
    }
    // fase 2 del middleware
    console.log(store.getState());
} 

export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
    middleware: [persistanceLocalStorageMiddleware, syncWithDatabaseMiddleware]
})


// Saca el tipo de dato que retorna la funcion en automatico
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch