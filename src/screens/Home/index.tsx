import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles'
import Participant from '../../components/Participant';
import { useState } from 'react';

interface Participant {
    id:number;
    name: string;
}


export function Home() {

    const [participants, setParticipants] = useState<Participant[]>([])

    const [participanteName, setParticipantName] = useState<string>()

    function handleParticipantAdd() {
        if (participanteName) {
            setParticipants(prevState => [...prevState, {
                id: new Date().getTime(),
                name: participanteName
            }])

            setParticipantName('')
        } else {
            Alert.alert('Ops', 'Preencha o nome do participante')
        }
    }

    function removeItemFromParticipants(id:number){
        setParticipants(prevState => prevState.filter(item => item.id !== id))
        Alert.alert('Success !','Removido com sucesso')
    }

    function handleParticipantRemove(id: number) {
        // get Participant Name by Id
        const name = participants.find(item => item.id === id)?.name

        Alert.alert('Remover', `Gostaria de remover  ${name} da lista ?`, [
            {
                text: 'Sim',
                onPress: () => removeItemFromParticipants(id)
            },
            {
                text: 'Não',
                style: 'cancel'
            },
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Primeiro App
            </Text>
            <Text style={styles.eventDate}>
                Terça, 11 de Abril de 2023
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                    onChangeText={setParticipantName}
                    value={participanteName}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={participants}
                keyExtractor={item => item.id.toString()}
                renderItem={({item})=>(
                    <Participant
                        key={item.id}
                        name={item.name}
                        onRemove={() => handleParticipantRemove(item.id)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={()=>(
                    <Text style={styles.emptyListText}>
                        Nenhum participante adicionado
                    </Text>
                )}
            />
        </View>
    );
}
