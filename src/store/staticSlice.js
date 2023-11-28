import {createSlice} from '@reduxjs/toolkit'

export const staticSlice = createSlice({
    name: 'static',
    initialState: {
        user: '',
        inputmoney: 0,
        outputmoney: 0,
        banlence: 0
    },
    reducers: {
        addMoney(state, action) {
            console.log('action in redux >>>', action.payload)
            return {
                ...state,
                user: action.payload.user,
                inputmoney: action.payload.inputmoney,
                banlence: state.banlence + action.payload.inputmoney
            }
        },
        
        addInfo(state, action) {
            console.log('add user : ', action.payload)
            return {
                ...state,
                user: action.payload,
                inputmoney: action.payload.inputmoney,
                banlence: action.payload.inputmoney
            }
        },
        
        outMoney(state, action) {
            return {
                ...state,
                outputmoney: action.payload.outputmoney,
                banlence: state.banlence - action.payload.outputmoney
            }
        },
     
    }
})

const {actions, reducer} = staticSlice
export const {addMoney, outMoney, addInfo} = actions