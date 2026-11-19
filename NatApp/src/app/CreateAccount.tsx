
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { registerUser } from '../connection/api';


import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';

export default function CreateAccount() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    async function signUpChecker () {
        if(username.trim() === '') {
            Alert.alert("Error", "Please enter an username");
            return;
        }
        if(email.trim() === '') {
            Alert.alert("Error", "Please enter an email");
            return;

        }

        if(password.trim() === '') {
            Alert.alert("Error", "Please enter an password");
            return;

        }




        if(confirmPassword .trim() === '') {
            Alert.alert("Error", "Please confirm your password");
            return;

        }

        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match");
            return;
        }

        if (password.length < 6) {
            Alert.alert("Error", "Password must be at least 6 characters");
            return;
        }


        try {
            await registerUser(username.trim(), email.trim(), password);
            Alert.alert("Success", "Your account has been created", [
                {
                    text: "OK",
                    onPress: () => router.replace('/')



                }

            ]);


        } catch (error) {
            Alert.alert("Error", "Something went wrong while creating your account");


        }





    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lost & Found</Text>

            <Text style={styles.subtitle}>Create your account</Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                autoCorrect={false}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={true}
            />

            <TouchableOpacity
                style={styles.createButton}
                onPress={signUpChecker}


            >
                <Text style={styles.createButtonText}>
                    Create Account
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 12
    },

    subtitle: {
        fontSize: 16,
        marginBottom: 32
    },

    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 6,
        padding: 14,
        fontSize: 16,
        marginBottom: 16
    },

    createButton: {
        width: '100%',
        backgroundColor: '#2196F3',
        padding: 15,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 8
    },

    createButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
