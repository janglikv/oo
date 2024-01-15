import { useCallback } from "react";
import { store } from "./@store";
import { get } from "./utils";

export function useFormItemProps(name) {
    const value = store.useSelector((state) => get(state, name)?.value);
    const ctx = store.useContext();

    const onChange = useCallback(
        (value) => {
            if (!name) {
                return;
            }
            if ("target" in value) {
                value = value.target.value;
            }
            ctx.setState((state) => {
                return {
                    ...state,
                    [name]: { ...state[name], value },
                };
            });
        },
        [ctx, name]
    );

    return { name, ...(name ? { value, onChange } : {}) };
}
