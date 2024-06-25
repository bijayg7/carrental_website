import React from "react"
import { useState } from "react"
import { useLoaderData, Form, redirect, useActionData, useNavigation } from "react-router-dom"
import { loginUser } from "../utils/api"

export function loader({ request }) {
    const params = new URL(request.url).searchParams
    const message = params.get("message")
    return message
}

export async function action({request}) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const params = new URL(request.url).searchParams
    const pathname = params.get("redirectTo") || "/host"
    try{
        const data = await loginUser( {email, password} )
        console.log(data)
        localStorage.setItem("loggedin", true)
        const response = redirect(pathname)
        response.body = true
        return response
    } catch(error){
        return error.message
    }
}

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const message = useLoaderData()
    const errorMessage = useActionData()
    const navigation = useNavigation()

    function handlePassword(e) {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {errorMessage && <h3 className="red">{errorMessage}</h3> }
            <Form method="post" className="login-form" replace >
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                />
                <input
                    name="password"
                    type= {showPassword ? "text" : "password"}
                    placeholder="Password"
                />
                {<span className="password-label" onClick={handlePassword}>{showPassword ?"Hide" : "Show"}</span> }
                
                <button disabled={navigation.state === "submitting"}>{navigation.state === "submitting" ? "Logging in..." : "Log in"}</button>
            </Form>
        </div>
    )

}