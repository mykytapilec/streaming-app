import React from 'react'

import MainLayout from '../layouts/MainLayout'
import styles from '../styles/pages.module.scss'


const Index = () => {
    return (
        <>
            <MainLayout>
                <div className={styles.center}>
                    Main page
                </div>
            </MainLayout>
        </>
    )
}

export default Index