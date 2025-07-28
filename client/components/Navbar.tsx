import * as React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import {useRouter} from 'next/router'
import { AppBar, CssBaseline, Drawer, IconButton, List, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { ChevronLeftOutlined, InboxOutlined, MailOutline } from '@mui/icons-material'
import { menuItems } from '../constants'


export default function Navbar() {
    const [open, setOpen] = React.useState(false)
    const router = useRouter()

    const handleDrawerOpen = () => {
        setOpen(true)
    };

    const handleDrawerClose = () => {
        setOpen(false)
    };

    return (
        <><div>
            <CssBaseline />
            <AppBar
                position="fixed"
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Persistent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 300,
                        backgroundColor: '#f5f5f5',
                        color: '#333',
                        boxShadow: '2px 0 5px rgba(0,0,0,0.2)',
                    },
                }}
            >
                <div>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftOutlined />
                    </IconButton>
                </div>
                <List>
                    {menuItems.map(({ text, href }, index) => (
                        <li key={href} onClick={() => {
                            console.log('clicked', href)
                            router.push(href)

                        }} className='menu-item'>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxOutlined /> : <MailOutline />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </li>
                    ))}
                </List>
            </Drawer>
        </div>
        
        <style jsx>
            {`
            .menu-item {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                padding: 10px;
                border-radius: 5px;
                margin-bottom: 5px;
                transition: background-color 0.3s ease;
                &:hover {
                    background-color: #e0e0e0;
                }
            }
            `}
            </style>
        </>
    )
}