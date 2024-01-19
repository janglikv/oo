import { useLoaderData } from "@remix-run/react";
import { userCookie } from "../servers/cookie";
import LoginForm from "../modules/login-form";

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
            <LoginForm />
        </div>
    );
}
