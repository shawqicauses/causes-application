// DONE REVIEWING: GITHUB COMMIT 💫
import {Navigate, Outlet} from "react-router-dom"

const RootLayout = function RootLayout() {
  const isAuthenticated = false
  return isAuthenticated ? (
    <section>
      <Outlet />
    </section>
  ) : (
    <Navigate to="/auth/sign-in" />
  )
}

export default RootLayout
