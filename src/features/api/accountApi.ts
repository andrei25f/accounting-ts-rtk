import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserData, UserRegister } from "../../utils/types";
import { base_url, createToken } from "../../utils/constants";
import { RootState } from "../../app/store";

export const registerUser = createAsyncThunk(
    'user/register',
    async (user: UserRegister) => {
        const response = await fetch(`${base_url}/user`, {
            method: 'Post',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 409) {
            throw new Error(`user ${user.login} already exist`);
        }
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        const token = createToken(data.login, data.password);
        return { token, user: data };
    }
)

export const fetchUser = createAsyncThunk(
    'user/login',
    async (token: string) => {
        const response = await fetch(`${base_url}/login`, {
            method: 'Post',
            headers: {
                'Authorization': token
            }
        })
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        return { token, user: data };
    }
)

export const updateUser = createAsyncThunk<UserData, UserData, {state: RootState}>(
    'user/update',
    async (user: UserData, { getState }) => {
        const response = await fetch(`${base_url}/user`, {
            method: 'Put',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getState().token
            }
        })
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const { firstName, lastName } = await response.json()
        return { firstName, lastName };
    }
)

export const changePassword = createAsyncThunk<string, string, {state: RootState}>(
    'user/password',
    async (password, { getState }) => {
        const response = await fetch(`${base_url}/user/password`, {
            method: 'Put',
            headers: {
                'X-Password': password,
                'Authorization': getState().token
            }
        })
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        return createToken(getState().user.login, password);
    }
)