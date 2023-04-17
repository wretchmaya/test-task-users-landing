import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchShowMoreUsersRequest = createAsyncThunk(
    'landing/fetchShowMoreUsers',
    async (page: number) => {
        try {
            const { data } = await axios.get(
                `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
            );
            return data;
        } catch (error) {
            console.error(error);
        }
    }
);

export const fetchUsersRequest = createAsyncThunk('landing/fetchUsers', async () => {
    try {
        const { data } = await axios.get(
            `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`
        );
        return data;
    } catch (error) {
        console.error(error);
    }
});

export const createUserRequest = createAsyncThunk(
    'landing/createUserRequest',
    async (user: FormData) => {
        try {
            const jwtToken = sessionStorage.getItem('token');
            await axios.post(
                'https://frontend-test-assignment-api.abz.agency/api/v1/users',
                user,
                {
                    headers: {
                        Token: jwtToken,
                    },
                }
            );
        } catch (error) {
            console.error(error);
        }
    }
);

export const getTokenRequest = createAsyncThunk('landing/getToken', async () => {
    try {
        const { data } = await axios.get(
            'https://frontend-test-assignment-api.abz.agency/api/v1/token'
        );
        sessionStorage.clear();
        sessionStorage.setItem('token', data.token);
    } catch (error) {
        console.error(error);
    }
});
