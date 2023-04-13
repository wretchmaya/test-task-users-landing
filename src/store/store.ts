import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import landingReducer from './rootReducer';

export const store = configureStore({
	reducer: {
		mainStore: landingReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
