import ClientOnly from './components/ClientOnly';
import AdminDashboardLayout from './components/dashboard/admin/AdminDashboardLayout';
import DashboardLayout from './components/dashboard/admin/AdminDashboardLayout';
import UserDashboardLayout from './components/dashboard/user/UserDashboardLayout';
import './globals.css'
import { Inter, Nunito } from 'next/font/google'

const font = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: 'St Bakhita',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
        <UserDashboardLayout>
          {children}
        </UserDashboardLayout>
        </ClientOnly>
        </body>
    </html>
  )
}
