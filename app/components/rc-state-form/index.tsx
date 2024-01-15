import { cloneElement } from "react";
import { FormItemProps, RcStateFormProps } from "./@types";
import { useFormItemProps } from "./hooks";
import { store } from "./@store";

export default function Form({ children, element, ...props }: RcStateFormProps) {
    const form = () => {
        if (element) {
            return cloneElement(element, { children, ...props });
        }
        return <form {...props}>{children}</form>;
    };
    return <store.Provider>{form()}</store.Provider>;
}

Form.Item = function FormItem({ children, name, label }: FormItemProps) {
    console.log(`${name} render`);
    const formItemProps = useFormItemProps(name);
    const inputComp = cloneElement(children, { ...formItemProps });
    if (label) {
        return (
            <label>
                <span>{label}</span>
                {inputComp}
            </label>
        );
    }
    return inputComp;
};
