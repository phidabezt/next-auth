import { LoginForm } from "@/components/auth/LoginForm"

const LoginPage = () => {
  console.log('DATABASE_URL', process.env.DATABASE_URL)
  return <LoginForm />
}

export default LoginPage
