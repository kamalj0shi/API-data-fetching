# API-data-fetching

This is a simple React Native application that fetches user information from a public API and displays it. The app allows users to navigate through different user profiles using "Previous" and "Next" buttons.

## Features

- Fetches user data from the Random Data API.
- Displays user details including ID, UID, password, first name, last name, username, email, and avatar.
- Allows navigation between different user profiles using "Previous" and "Next" buttons.
- Responsive and visually appealing user interface.


## Usage

- Run the application on an emulator or a physical device.
- Use the "Previous" and "Next" buttons to navigate through different user profiles.

## Code Overview

### App Component

The main component of the application which handles fetching user data and managing state.

import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Usercart from './components/Usercart';

const App = () => {
  const [data, setData] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);

  const getApiData = async () => {
    const url = "https://random-data-api.com/api/users/random_user?size=80";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getApiData();
  }, []);

  const prevUser = () => {
    if (currIndex > 0) {
      setCurrIndex(currIndex - 1);
    }
  };

  const nextUser = () => {
    if (currIndex < data.length - 1) {
      setCurrIndex(currIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      {data.length > 0 ? <Usercart data={data[currIndex]} /> : <Text>No users available</Text>}

      <View style={styles.btnContainer}>
        <Button title="Previous" onPress={prevUser} disabled={currIndex === 0} />
        <Button title="Next" onPress={nextUser} disabled={currIndex === data.length - 1} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
});
