import Form from "../../components/form";

export default function LoginForm() {
    return (
        <Form method="post" action="/api/login">
            <Form.Item name="username" label="username">
                <Input type="text" />
            </Form.Item>
            <Form.Item name="password" label="password">
                <Input type="text" />
            </Form.Item>
            <button type="submit">提交</button>
        </Form>
    );
}

function Input({value, onChange}) {
    console.log(value);
    return <input value={value} onChange={onChange} />;
}

