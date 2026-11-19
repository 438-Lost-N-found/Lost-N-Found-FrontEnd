
import React from 'react';
import {
    render,
    fireEvent,
    waitFor,
    screen
} from '@testing-library/react-native';
import { Alert } from 'react-native';
import CreateAccount from '../app/CreateAccount';
import { registerUser } from '../connection/api';

jest.mock('../connection/api', () => ({
    registerUser: jest.fn()
}));

jest.mock('expo-router', () => ({
    useRouter: () => ({
        replace: jest.fn()
    })
}));

describe('Create Account Tests', () => {

    beforeEach(() => {
        jest.clearAllMocks();
        jest.spyOn(Alert, 'alert').mockImplementation(() => {});
    });

    test('Rejects an empty username', async () => {
        await render(<CreateAccount />);

        await fireEvent.changeText(screen.getByPlaceholderText('Email'), 'test@example.com');
        await fireEvent.changeText(screen.getByPlaceholderText('Password'), 'Password123');
        await fireEvent.changeText(screen.getByPlaceholderText('Confirm Password'), 'Password123');

        await fireEvent.press(screen.getByText('Create Account'));

        expect(Alert.alert).toHaveBeenCalledWith(
            'Error',
            'Please enter an username'
        );
        expect(registerUser).not.toHaveBeenCalled();
    });

    test('Rejects an empty email', async () => {
        await render(<CreateAccount />);

        await fireEvent.changeText(screen.getByPlaceholderText('Username'), 'testuser');
        await fireEvent.changeText(screen.getByPlaceholderText('Password'), 'Password123');
        await fireEvent.changeText(screen.getByPlaceholderText('Confirm Password'), 'Password123');

        await fireEvent.press(screen.getByText('Create Account'));

        expect(Alert.alert).toHaveBeenCalledWith(
            'Error',
            'Please enter an email'
        );
        expect(registerUser).not.toHaveBeenCalled();
    });

    test('Rejects an empty password', async () => {
        await render(<CreateAccount />);

        await fireEvent.changeText(screen.getByPlaceholderText('Username'), 'testuser');
        await fireEvent.changeText(screen.getByPlaceholderText('Email'), 'test@example.com');

        await fireEvent.press(screen.getByText('Create Account'));

        expect(Alert.alert).toHaveBeenCalledWith(
            'Error',
            'Please enter an password'
        );
        expect(registerUser).not.toHaveBeenCalled();
    });

    test('Rejects a password shorter than 6 characters', async () => {
        await render(<CreateAccount />);

        await fireEvent.changeText(screen.getByPlaceholderText('Username'), 'testuser');
        await fireEvent.changeText(screen.getByPlaceholderText('Email'), 'test@example.com');
        await fireEvent.changeText(screen.getByPlaceholderText('Password'), '12345');
        await fireEvent.changeText(screen.getByPlaceholderText('Confirm Password'), '12345');

        await fireEvent.press(screen.getByText('Create Account'));

        expect(Alert.alert).toHaveBeenCalledWith(
            'Error',
            'Password must be at least 6 characters'
        );
        expect(registerUser).not.toHaveBeenCalled();
    });

    test('Rejects passwords that do not match', async () => {
        await render(<CreateAccount />);

        await fireEvent.changeText(screen.getByPlaceholderText('Username'), 'testuser');
        await fireEvent.changeText(screen.getByPlaceholderText('Email'), 'test@example.com');
        await fireEvent.changeText(screen.getByPlaceholderText('Password'), 'Password123');
        await fireEvent.changeText(screen.getByPlaceholderText('Confirm Password'), 'Different123');

        await fireEvent.press(screen.getByText('Create Account'));

        expect(Alert.alert).toHaveBeenCalledWith(
            'Error',
            'Passwords do not match'
        );
        expect(registerUser).not.toHaveBeenCalled();
    });

    test('Calls the backend when all fields are valid', async () => {
        (registerUser as jest.Mock).mockResolvedValue({});

        await render(<CreateAccount />);

        await fireEvent.changeText(screen.getByPlaceholderText('Username'), 'testuser');
        await fireEvent.changeText(screen.getByPlaceholderText('Email'), 'test@example.com');
        await fireEvent.changeText(screen.getByPlaceholderText('Password'), 'Password123');
        await fireEvent.changeText(screen.getByPlaceholderText('Confirm Password'), 'Password123');

        await fireEvent.press(screen.getByText('Create Account'));

        await waitFor(() => {
            expect(registerUser).toHaveBeenCalledWith(
                'testuser',
                'test@example.com',
                'Password123'
            );
        });
    });

});
