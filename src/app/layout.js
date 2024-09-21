import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { NavBar } from "@/components/component/nav-bar"
import Footer  from "@/components/Footer/Footer"

export const metadata = {
  title: "Movies",
  description: "Your favorite movies",
}

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}
