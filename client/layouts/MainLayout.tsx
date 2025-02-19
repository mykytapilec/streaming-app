import React, { ReactNode } from "react"

import Navbar from "../components/Navbar"

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default MainLayout