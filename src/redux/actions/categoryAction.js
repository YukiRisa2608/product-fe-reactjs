// Define all action for category object

export const addCategory = (payload) => {
    return {
        type: "ADD",
        payload
    }
}

export const updateCategory = (payload) => {
    return {
        type: "UPDATE",
        payload
    }
}

export const deleteCategory = (payload) => {
    return {
        type: "DELETE",
        payload
    }
}