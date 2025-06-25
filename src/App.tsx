import Footer from "./components/footer"
import Hero from "./components/hero"
import Navbar from "./components/navbar"
import Projects from "./components/projects-display"
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

    <div className="flex min-h-svh flex-col items-center">
      <Navbar />
      <div className="flex flex-1 flex-col items-center justify-center w-full">
      {/* Your main content goes here */}
      <Hero />
      <Projects />
      <Footer />
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App