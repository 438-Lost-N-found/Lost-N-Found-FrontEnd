import * as SecureStore from 'expo-secure-store';
const API_URL = 'http://192.168.0.87:8080';

export async function registerUser (
    username: string,
    email: string,
    password: string
) {const response = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        })
    });
    const data = await response.json();
    if(!response.ok) {
        throw new Error(data.message || "Couldn't create account");

    }
    return data;
}


export async function loginUser (
    username: string,
    password: string
) {const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: username,
            password: password
        })
    });
    const data = await response.json();
    if(!response.ok) {
        throw new Error(data.message || "Please type in the correct username and password");

    }
    await SecureStore.setItemAsync('access_token', data.access_token);
    await SecureStore.setItemAsync('refresh_token', data.refresh_token);
    return data;
}


