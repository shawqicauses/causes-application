// DONE REVIEWING: GITHUB COMMIT 💫
import {Route, Routes} from "react-router-dom"
import SignInForm from "./auth/forms/sign-in"
import SignUpForm from "./auth/forms/sign-up"
import AuthLayout from "./auth/layout"
import "./globals.css"
import RootLayout from "./root/layout"
import {Home} from "./root/pages"

const App = function App() {
  return (
    <main>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route element={<AuthLayout />}>
          <Route path="/auth/sign-in" element={<SignInForm />} />
          <Route path="/auth/sign-up" element={<SignUpForm />} />
        </Route>
        {/* PRIVATE ROUTES */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
