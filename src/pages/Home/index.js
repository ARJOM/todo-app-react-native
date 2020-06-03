import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();

    function navigateToList() {
        navigation.navigate("List");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.description}>Aplicativo To Do para praticar react-native</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigateToList()}
            >
                <Text>Começar</Text>
            </TouchableOpacity>
        </View>
    );
};
