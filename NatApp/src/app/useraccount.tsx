import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { globalStyles } from '../constants/styles';

const UserAccount = () => {
  return (
    <View style={globalStyles.screen}>
      <Text style={globalStyles.text}>User Account</Text>
      <Link href="/inbox">
        <Text style={globalStyles.text}>Messages</Text>
      </Link>
    </View>
  );
};

export default UserAccount;