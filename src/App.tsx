import { Routes, Route } from 'react-router-dom'
import { Building2, Bookmark, Settings } from 'lucide-react'
import { Layout } from '@/components/layout/Layout'
import Dashboard from '@/pages/Dashboard'
import ManagerProfile from '@/pages/ManagerProfile'
import FundDetails from '@/pages/FundDetails'
import SearchPage from '@/pages/Search'
import { ManagersPage, PlaceholderPage } from '@/pages/Placeholder'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ManagerProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/managers" element={<ManagersPage />} />
        <Route path="/funds" element={<Dashboard />} />
        <Route path="/funds/:slug" element={<FundDetails />} />
        <Route path="/search" element={<SearchPage />} />
        <Route
          path="/companies"
          element={<PlaceholderPage title="Companies" description="Explore AMCs and the companies held across tracked fund portfolios." icon={<Building2 size={22} />} />}
        />
        <Route
          path="/bookmarks"
          element={<PlaceholderPage title="Bookmarks" description="Save managers and funds here to track them over time." icon={<Bookmark size={22} />} />}
        />
        <Route
          path="/settings"
          element={<PlaceholderPage title="Settings" description="Manage your account, notifications, and display preferences." icon={<Settings size={22} />} />}
        />
      </Routes>
    </Layout>
  )
}
