import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createUserRequest, fetchUsersRequest, fetchShowMoreUsersRequest } from './api';
import { RootState } from './store';
import { UsersRequestResponse, LandingState } from './types';

const initialState: LandingState = {
    users: [],
    page: 1,
    totalPages: 0,
    isLoadingList: false,
    isLoadingForm: false,
    userHasBeenCreated: false,
};

export const landingSlice = createSlice({
    name: 'landing',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchShowMoreUsersRequest.pending, state => {
            state.isLoadingList = true;
        });
        builder.addCase(
            fetchShowMoreUsersRequest.fulfilled,
            (state, action: PayloadAction<UsersRequestResponse>) => {
                state.isLoadingList = false;
                state.users = [...state.users, ...action.payload.users];
                state.page = action.payload.page;
                state.totalPages = action.payload.total_pages;
            }
        );

        builder.addCase(createUserRequest.pending, state => {
            state.isLoadingForm = true;
        });
        builder.addCase(createUserRequest.fulfilled, state => {
            state.userHasBeenCreated = true;
            state.isLoadingForm = false;
        });

        builder.addCase(fetchUsersRequest.pending, state => {
            state.isLoadingList = true;
        });
        builder.addCase(
            fetchUsersRequest.fulfilled,
            (state, action: PayloadAction<UsersRequestResponse>) => {
                state.isLoadingList = false;
                state.userHasBeenCreated = false;
                state.users = [...action.payload.users];
            }
        );
    },
});

export const selectUsers = (state: RootState) => state.mainStore.users;
export const selectPage = (state: RootState) => state.mainStore.page;
export const selectTotalPages = (state: RootState) => state.mainStore.totalPages;
export const selectLoadingListStatus = (state: RootState) =>
    state.mainStore.isLoadingList;
export const selectLoadingFormStatus = (state: RootState) =>
    state.mainStore.isLoadingForm;
export const selectUserHasBeenCreated = (state: RootState) =>
    state.mainStore.userHasBeenCreated;

export default landingSlice.reducer;
