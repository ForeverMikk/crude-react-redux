import { type Middleware, configureStore } from "@reduxjs/toolkit";
import { toast } from 'sonner'
import usersReducer, { rollbackUser } from './users/slice';

// este middleware va a ser el encargado de que persistan los datos a traves de la ejecucion

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
    next(action);
    localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
}

const syncWithDatabaseMiddleware: Middleware = (store) => (next) => (action) => {
    const {type, payload} = action;
    const previousState = store.getState();
    // fase 1 del middleware
    console.log({type, payload});
    console.log(store.getState());

    next(action);

    if (type === 'users/deleteUserById') {
        const userIdToRemove = payload;
        const userToRemove = previousState.users.find(user => user.id === payload);

        fetch(`https://jsonplaceholder.typicode.coasddm/users/${userIdToRemove}`, {
            method: "DELETE"
        })
        .then(res => {
            if(res.ok) {
                toast.success(`Usuario ${payload} borrado correctamente`);
            }
            throw new Error('Error al eliminar usuario');
        })
        .catch((err) => {
            toast.error(`Error al eliminar el usuario ${userIdToRemove}`);
            if (userToRemove) store.dispatch(rollbackUser(userToRemove))
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