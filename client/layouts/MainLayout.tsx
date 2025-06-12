import React, { ReactNode } from "react"

import Navbar from "../components/Navbar"

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div style={{ marginTop: 100, background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%)', minHeight: '100vh' }}>
            <Navbar />
            {children}
        </div>
    )
}

export default MainLayout