import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { addMoney, outMoney } from "./store/staticSlice"
import { useState } from "react"
const Screen2 = ({route}) => {
    const [valueAdd, setValueAdd] = useState(0)
    const [valueOut, setValueOut] = useState(0)
    const dispatch= useDispatch()
    const {info} = route.params
    console.log('info', info)
    const {inputmoney, outputmoney, banlence, user} = useSelector(state => state.static)
    const handleAdd = async () => {
        dispatch(addMoney({
            user: info,
            inputmoney: +valueAdd,
            banlence: +info.banlence
        }))
        await fetch (`https://6565842eeb8bb4b70ef1af14.mockapi.io/account/${info.id}`, {
            method: 'put',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...info, banlence: +info.banlence + +valueAdd, inputmoney: +inputmoney    })
        })
    }
    const handleOutMoney = async () => {
        dispatch(outMoney({
            user: info,
            outputmoney: +valueOut,
            banlence: +info.banlence
        }))

        await fetch (`https://6565842eeb8bb4b70ef1af14.mockapi.io/account/${info.id}`, {
            method: 'put',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...info, banlence: +info.banlence - +valueAdd, outputmoney: +valueAdd })
        })

    }
    return (
        <View style={{paddingLeft: 20}}>
            <View>
                <View>
                    <Text style={{fontSize: 25, fontWeight: 'bold', color: 'red'}}>Infor Account & history trasaction</Text>
                    <Text style={{fontSize: 25, fontWeight: "bold", marginTop: 10, marginBottom: 10}}>Name Account : {user.username}</Text>
                </View>
                <View>
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>Total Balance</Text>
                    <Text style={{fontSize: 25, fontWeight: "bold", color: 'red'}}>{banlence}</Text>
                </View>
                <View>
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>History Input Now</Text>
                    <Text style={{fontSize: 25, fontWeight: "bold", color: 'red'}}>{inputmoney}</Text>
                </View>
                <View>
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>History Output Now</Text>
                    <Text style={{fontSize: 25, fontWeight: "bold", color: 'red'}}>{outputmoney}</Text>
                </View>
            </View>
            <View>
                <Text style={{marginTop: 10, marginBottom: 10, fontSize: 25, fontWeight: 'bold'}}>Handle Tracsaction</Text>
                <View>
                    <Text style={{marginTop: 10, marginBottom: 10}}>How mouch Monet You Want Input Bancle</Text>
                    <TextInput 
                    value={valueAdd}
                    onChangeText={value => setValueAdd(value)}
                    style={{width: '300px', height: '50px', borderWidth: 3}}></TextInput>
                </View>
                <View style={{marginTop: 10}}>
                <TouchableOpacity 
                style={{width: 200, height: 40, backgroundColor: 'red', display: "flex", justifyContent: 'center', alignItems: 'center', borderRadius: 4}} 
                onPress={handleAdd}>
                    <Text style={{fontSize: 20, color: 'white'}}>Add money</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View>
                <View>
                    <Text>How mouch Monet You Want Output Bancle</Text>
                    <TextInput 
                    value={valueOut}
                    onChangeText={value => setValueOut(value)}
                    style={{width: '300px', height: '50px', borderWidth: 3}}></TextInput>
                </View>
                <View style={{marginTop: 10}}>
                <TouchableOpacity 
                style={{width: 200, height: 40, backgroundColor: 'red', display: "flex", justifyContent: 'center', alignItems: 'center', borderRadius: 4}} 
                onPress={handleOutMoney}>
                    <Text style={{fontSize: 20, color: 'white'}}>Add money</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}
export default Screen2