//import {useState} from "react";
import { useReducer } from 'react';
import './index.css';

function LoginForm() {
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const email = form.email.value as string;
    const password = form.password.value;
    console.log({ email, password });
  }

  return (
    <div className="container">
      <form className="form form__login" onSubmit={(e) => submit(e)}>
        <input id="email" type="text" />
        <input id="password" type="password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default function Login() {
  return <LoginForm />;
}
