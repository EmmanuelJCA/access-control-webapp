'use client'
import NextLink from 'next/link';
import { AppBar, Link, Toolbar, Typography } from '@mui/material';
import { DarkMode } from '@mui/icons-material';

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar
        sx={{
          display: 'flex', 
          justifyContent: 'space-between' 
        }}
      >
        <Link component={ NextLink } href="/" underline='none' color="white">
          <Typography variant='h6'>Access-control-app</Typography>
        </Link>

        <DarkMode sx={{ cursor: 'pointer' }} />
      </Toolbar>
    </AppBar>
  )
}
