import {createStore} from 'redux';
import rootReducer from '../reducers/index';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['tweets','show']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer,)
export const persistor = persistStore(store);

export default store;