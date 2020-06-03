import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from "./styles";

export default function Home() {
  return (
      <View style={styles.container}>
          <Text style={styles.description}>Aplicativo To Do para praticar react-native</Text>
          <TouchableOpacity
              style={styles.button}
              onPress={() => {}}
          >
              <Text>Começar</Text>
          </TouchableOpacity>
      </View>
  );
};
