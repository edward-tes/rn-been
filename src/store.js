import {createStore} from "redux"

import app from "app/reducers"

const store = createStore(app)
export default store
