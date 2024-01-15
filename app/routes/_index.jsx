import { useLoaderData } from "@remix-run/react";
import { userCookie } from "../cookie";
import Form from "../components/form";

export const meta = () => {
    return [{ title: "首页 | Home" }];
};

export const loader = async ({ request }) => {
    const cookieHeader = request.headers.get("Cookie");
    console.log(cookieHeader);
    const user = userCookie.parse(cookieHeader);
    return { user };
};

export default function Index() {
    const { user } = useLoaderData();
    console.log({ user });
    return (
        <div>
            <div>o.o</div>
            <Form method="post" action="/api/login">
                <Form.Item name="username">
                    <input type="text" />
                </Form.Item>
                <Form.Item name="password">
                    <input type="text" />
                </Form.Item>
                <button type="submit">提交</button>
            </Form>
        </div>
    );
}
