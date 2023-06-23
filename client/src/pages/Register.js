import { useState } from "react"

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit =  (e) => {
    e.preventDefault()
  }

  return (
    <form className="signup" onSubmit={handleSubmit} >
      <h3>Register</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button  type="submit">Sign up</button>
      {/* {error && <div className="error">{error}</div>} */}
    </form>
  )
}

export default Register