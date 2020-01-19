import Routes from './src/routes';
import { StatusBar } from 'react-native';
import React from 'react';

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7D40E7"/>
            <Routes />
        </>
    );
}