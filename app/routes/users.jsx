import { useLoaderData } from "@remix-run/react";
import { findList, insertOne } from "../utils/mongo";
import { useEffect } from "react";
import { Form } from "@remix-run/react";

export async function action({ request }) {
    const formData = await request.formData();
    const action = formData.get("action");
    if (action === "insert") {
        const name = formData.get("name");
        const age = formData.get("age");
        const data = { name, age };
        await insertOne("users", data);
    }
    return null;
}

export const meta = () => {
    return [{ title: "用户 | users" }];
};

export const loader = async () => {
    const users = await findList("users");
    return { users };
};

export default function Index() {
    const { users } = useLoaderData();

    useEffect(() => {
        console.log("init");
    }, []);
    return (
        <div>
            {JSON.stringify({ users })}
            <Form method="post" action="/api/login">
                <input type="text" name="name" />
                <input type="text" name="age" />
                <button type="submit">提交</button>
            </Form>
        </div>
    );
}
