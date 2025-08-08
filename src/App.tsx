import { useState } from "react"
import { LoginForm } from "./components/LoginForm/LoginForm"
import "./App.css"

interface LoginResponse {
  success: boolean
  message: string
}

function App() {
  const [loginStatus, setLoginStatus] = useState<LoginResponse | null>(null)

  const handleLogin = async (data: { email: string; password: string }) => {
    // Simulate API call with 1 second delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock authentication logic
    if (data.email === "test@example.com" && data.password === "password123") {
      setLoginStatus({ success: true, message: "Login successful!" })
    } else {
      throw new Error("Invalid credentials")
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Welcome Back</h1>
        <p>Please sign in to continue</p>
      </header>

      <main>
        {loginStatus?.success ? (
          <div className="success-message" role="alert">
            {loginStatus.message}
          </div>
        ) : (
          <LoginForm onSubmit={handleLogin} />
        )}
      </main>

      <footer className="footer">
        <p>Demo credentials:</p>
        <code>Email: test@example.com</code>
        <br />
        <code>Password: password123</code>
      </footer>
    </div>
  )
}

export default App
