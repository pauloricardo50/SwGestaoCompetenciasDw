import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import usuarioReducer from './reducers/usuarios/usuario'
import alertaReducer from './reducers/alertas/alertas'
import projetosReducer from './reducers/projetos/projeto'
import taskReducer from './reducers/tasks/task'

const reducers = combineReducers({
    usuario : usuarioReducer,
    alerta  : alertaReducer,
    projeto : projetosReducer,
    task    : taskReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const storeConfig = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(storeConfig)

export { storeConfig, persistor }