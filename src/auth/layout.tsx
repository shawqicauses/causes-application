// DONE REVIEWING: GITHUB COMMIT 💫
import {Navigate, Outlet} from "react-router-dom"

const AuthLayout = function AuthLayout() {
  const isAuthenticated = false
  return isAuthenticated ? (
    <Navigate to="/" />
  ) : (
    <section>
      <Outlet />
    </section>
  )
}

export default AuthLayout
