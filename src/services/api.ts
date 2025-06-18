// ✅ Register user and save in localStorage
export const registerUser = async (email: string, password: string) => {
    const user = { email, password }
    localStorage.setItem("mock_user", JSON.stringify(user))
    return { success: true }
  }
  
  // ✅ Login user by verifying credentials
  export const loginUser = async (email: string, password: string) => {
    const stored = localStorage.getItem("mock_user")
    if (!stored) throw new Error("No user found. Please register first.")
  
    const user = JSON.parse(stored)
  
    if (user.email === email && user.password === password) {
      const token = "mock-jwt-token-" + Date.now()
      return { token }
    } else {
      throw new Error("Invalid email or password")
    }
  }
  
