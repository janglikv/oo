import RcStateForm from "../rc-state-form";
import { Form as FormElement } from "@remix-run/react";
import { RcStateFormProps } from "../rc-state-form/@types";

export default function Form(props: RcStateFormProps) {
    return <RcStateForm {...props} element={<FormElement />} />;
}

Form.Item = RcStateForm.Item;
