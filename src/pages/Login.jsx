import React from "react"
import { useState } from "react"
import { Form } from "react-router-dom"

export async function action({request}) {
    const data = await request.formData()
    const email = data.get("email")
    console.log(email)
    return null
}

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)


    function handlePassword(e) {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            <Form method="post" className="login-form">
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                />
                <input
                    name="password"
                    type= "password"//{showPassword ? "text" : "password"}
                    placeholder="Password"
                />
                {/* {showPassword ?
                <span className="password-label" onClick={handlePassword}>{loginFormData.password && "Hide"}</span> :
                <span className="password-label" onClick={handlePassword}>{loginFormData.password && "Show"}</span>
                } */}
                <button>Log in</button>
            </Form>
        </div>
    )

}