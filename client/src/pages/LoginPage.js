import { useState } from "react"

function LoginPage(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

  const handleSubmit =  (e) => {
    e.preventDefault()
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
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

      <button >Log in</button>
      {/* {error && <div className="error">{error}</div>} */}
    </form>
  )
}

export default  LoginPage;
