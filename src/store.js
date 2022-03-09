import  {createStore} from "redux";
import RootReduces from "./reducers";

const  store = createStore(RootReduces);

export default store;