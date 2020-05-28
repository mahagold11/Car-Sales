
export const BUY_FEATURE = 'BUY_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';


export const buyFeature = newFeature => {
    return {
      type: BUY_FEATURE,
      payload: newFeature
    };
};


export const removeFeature = oldFeature => {
    return {
        type: REMOVE_FEATURE,
        payload: oldFeature
    };
};