import React, {useState} from 'react';
import {TouchableOpacity, View, Text, FlatList} from "react-native";
import styles from "./styles";


// Elemento a ser renderizado pela flat list
function Todo({todo}) {
    return (
        <View>
            <Text>{todo}</Text>
        </View>
    );
}


export default function ToDoList() {
    const [todos, setTodos] = useState([{todo: "Arrumar minhas malas para a viagem"}, {todo: "Formatar o notebook"}, {todo: "Socar fascista no caminho do aeroporto"}]);

    return (
        <View>
            <Text>Atividades</Text>
            <FlatList
                data={todos}
                renderItem={({ item }) => <Todo todo={item.todo} />}
                keyExtractor={item => item.todo}
                style={styles.list}
            />
            <TouchableOpacity>
                <Text>Nova Tarefa</Text>
            </TouchableOpacity>
        </View>
    )
}
