import {configureStore} from '@reduxjs/toolkit'

import { staticSlice } from './staticSlice'

const store = configureStore({
    reducer: {static: staticSlice.reducer}
})

export default store