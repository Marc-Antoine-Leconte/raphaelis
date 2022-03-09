import data from '../assets/data/data.json'
const pagesContentReducer = (state = [], action) =>
{
    switch (action.type) {
        case 'GAME' :
            state = data[0]
            return state
        case 'CONTACT':
            state = data[1]
            return state
        default:
            return state = "Rien"
    }
}
export default pagesContentReducer;
