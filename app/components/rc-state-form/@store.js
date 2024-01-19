import { createStore } from 'rc-state';

export const store = createStore({
    state: {},
    actions: {
        setValue: (state, name, value) => {
            return {
                ...state,
                [name]: { ...state[name], value },
            };
        },
    },
});
