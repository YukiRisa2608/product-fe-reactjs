
const initState = {
    data: []
}


const categoryReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD":
            console.log("Adding category");
            return { ...state, data: [] };

        case "UPDATE":
            console.log("Update category");
            return { ...state, data: [] };

        case "DELETE":
            console.log("Delete category");
            return { ...state, data: [] };

        case "categories/getAll/fulfilled":
            return {
                ...state, data: action.payload.data
            }

        default:
            console.log("Unknown", action)
            return state;
    }
}

export default categoryReducer;
