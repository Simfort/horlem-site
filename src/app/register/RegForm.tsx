"use client";
import { useActionState, useEffect } from "react";
import createUser from "../lib/createUser";
import { redirect } from "next/navigation";

export default function RegForm() {
  const [state, formAction] = useActionState<
    {
      message: string[];
      payload: { name: string; email: string; password: string };
    },
    FormData
  >(createUser, {
    message: [],
    payload: { name: "", email: "", password: "" },
  });
  useEffect(() => {
    if (state.message[0] == "succesfully") {
      if (window) {
        window.localStorage.setItem("user", state.payload.name);
        redirect("/");
      }
    }
  }, [state.message, state.payload]);
  return (
    <form
      action={formAction}
      className="bg-white flex flex-col min-h-[600px] min-w-1/3 rounded-[20px] p-5 gap-5">
      <h1 className="w-1/1 text-center text-4xl font-bold">Register</h1>
      <label className="font-bold" htmlFor="Name">
        Name
      </label>
      <input
        defaultValue={state?.payload ? state!.payload.name : ""}
        className=" text-xl shadow-xl outline-none p-2 rounded-2xl"
        type="text"
        name="name"
        required
      />
      <label className="font-bold" htmlFor="Name">
        Email
      </label>
      <input
        defaultValue={state?.payload ? state!.payload.email : ""}
        className=" text-xl shadow-xl outline-none p-2 rounded-2xl"
        type="email"
        name="email"
        required
      />
      <label className="font-bold" htmlFor="Name">
        Password
      </label>
      <input
        defaultValue={state?.payload ? state!.payload.password : ""}
        className=" text-xl shadow-xl outline-none p-2 rounded-2xl"
        type="password"
        name="password"
        required
      />
      <ul>
        {state.message[0] !== "succesfully" &&
          state.message.map((val, key) => (
            <li className="text-red-600" key={key}>
              {val}
            </li>
          ))}
      </ul>
      <input
        type="submit"
        value="Register"
        className=" cursor-pointer bg-red-950 text-white h-13 rounded-2xl font-bold hover:bg-red-900 active:bg-red-300 "
      />
    </form>
  );
}
