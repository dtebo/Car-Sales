export const ADD_FEATURE = 'ADD_FEATURE';
export const UPDATE_CAR = 'UPDATE_CAR';

export const addFeature = (newFeature) => {
    return {
        type: ADD_FEATURE,
        payload: newFeature
    };
};

export const updateCar = (itemToUpdate) => {
    return {
        type: UPDATE_CAR,
        payload: itemToUpdate
    };
};