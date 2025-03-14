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

        <Button title="Next"  onPress={nextUser} disabled={currIndex === data.length - 1} />
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
    justifyContent:'space-around',
    width: '100%',
    paddingHorizontal: 20
    
  },
  
});
