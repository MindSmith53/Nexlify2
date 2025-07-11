import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nexlify.dev",
  description: "Nexlify is an AI-driven career coaching platform designed to be your ultimate companion in professional growth. Whether you're a student exploring career options, a job seeker looking for the perfect role, or a professional striving for career advancement, Nexlify provides everything you need to succeed. With its AI-powered career tools, Nexlify offers personalized guidance, resume optimization, interview preparation, and skill development strategies. Stay ahead of the curve with weekly industry insights, ensuring you're always informed about the latest trends and job market demands. Nexlify’s resume builder and cover letter generator help you craft professional, ATS-friendly documents effortlessly. Its AI interview prep simulates real-world interview scenarios, providing instant feedback and helping you refine your responses with confidence. The integrated job portal connects you directly to relevant job opportunities, offering AI-powered job matching, resume screening, and application tracking. Employers can post job listings, while job seekers can seamlessly explore, apply, and monitor their progress—all in one place. Whether you're just starting out or looking to level up, Nexlify is your all-in-one career growth platform, empowering you with the right tools, insights, and opportunities to achieve success.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header*/}
            <Header />
            <main className="min-h-screen">{children}</main>
            {/* footer */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made with 💗 by MindSmith</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
