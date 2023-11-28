import { useEffect, useState } from "react"
import { TouchableOpacity, View, TextInput, Text } from "react-native"
import {useNavigation} from '@react-navigation/native'
import { useDispatch } from "react-redux"
import { addInfo } from "./store/staticSlice"
const Screen1 = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [allUser, setAllUser] = useState([])
    const [data, setData] = useState({
        username: '',
        password: ''
    })
    const [err, setErr] = useState(false)
    useEffect(() => {
        (() => {
            fetch('https://6565842eeb8bb4b70ef1af14.mockapi.io/account', {
                method: 'get'
            }).then(rs => rs.json()).then(data => {
                if (data) {
                    setAllUser(data)
                   
                }
            })
        })()
        
    }, [])
    const handleLogin = () => {
        const checkAccount = allUser.find(item => item.username === data.username)
        if (!checkAccount) {
            setErr(true)
        }
        else {
            if (checkAccount.password.toString() !== data.password.toString()) {
                setErr(true)
            }
            else {
                navigation.navigate('screen2', {
                    info: checkAccount
                })
                dispatch(addInfo(checkAccount))
            }
        }
    }

    return (
        <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'center', marginLeft: 30}}>
            <View>
                <Text style={{fontSize: 30, marginBottom: 20, fontWeight: 'bold', marginTop: 20}}>Login user</Text>
            </View>
            <View>
                <View>
                    <Text style={{marginBottom: 10}}>username</Text>
                    <TextInput style={{width: '300px', height: '50px', borderWidth: 3, borderRadius: 8, marginBottom: 20, paddingLeft: 10}} value={data.username} 
                    onChangeText={value => setData({...data, username: value})} placeholder="username"></TextInput>
                </View>
                <View>
                    <Text style={{marginBottom: 10}}>password</Text>
                    <TextInput style={{width: '300px', height: '50px', borderWidth: 3, borderRadius: 8, marginBottom: 20, paddingLeft: 10}} value={data.password} 
                    onChangeText={value => setData({...data, password: value})} placeholder="password"></TextInput>
                </View>
            </View>
            <View>
                {err && <Text style={{color: 'red', fontWeight: 'bold'}}>Login failure !!!</Text>}
            </View>
            <View style={{marginTop: 20}}>
                <TouchableOpacity 
                style={{width: 300, height: 40, backgroundColor: 'red', display: "flex", justifyContent: 'center', alignItems: 'center', borderRadius: 4}} 
                onPress={handleLogin}>
                    <Text style={{fontSize: 20, color: 'white'}}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Screen1