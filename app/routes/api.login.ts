import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const name = formData.get("username");
    const password = formData.get("password");
    console.log(name, password);
    console.log(request.headers.get("referer"));
    return redirect(request.headers.get("referer") || "/");
}

export async function loader() {
    return json({ code: "0", message: "hello o.o" });
}
