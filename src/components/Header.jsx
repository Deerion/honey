import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HiveIcon from '@mui/icons-material/Hive';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const menuOpen = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AppBar
            position="sticky"
            elevation={4}
            sx={{
                bgcolor: 'rgba(255, 243, 207, 0.95)',
                boxShadow: '0 4px 16px 0 rgba(255, 179, 0, 0.15)',
                backdropFilter: 'blur(8px)',
            }}
        >
            <Toolbar>
                <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
                    <HiveIcon sx={{ color: '#ffb300', fontSize: 36, mr: 1 }} />
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            color: '#b28704',
                            letterSpacing: 2,
                            textShadow: '0 1px 2px #fffde7',
                        }}
                    >
                        Psieka - Guzów
                    </Typography>
                </Box>
                {/* Przyciski na dużych ekranach */}
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Button onClick={() => handleScroll('about')} sx={{ color: '#b28704', fontWeight: 600, borderRadius: 2, mx: 1, px: 2, transition: 'background 0.2s', '&:hover': { bgcolor: '#ffe082' } }}>
                        O nas
                    </Button>
                    <Button onClick={() => handleScroll('oferta')} sx={{ color: '#b28704', fontWeight: 600, borderRadius: 2, mx: 1, px: 2, transition: 'background 0.2s', '&:hover': { bgcolor: '#ffe082' } }}>
                        Oferta
                    </Button>
                    <Button onClick={() => handleScroll('kontakt')} sx={{ color: '#fff', fontWeight: 600, borderRadius: 2, mx: 1, px: 2, bgcolor: '#ffb300', boxShadow: '0 2px 8px 0 rgba(255, 179, 0, 0.12)', transition: 'background 0.2s', '&:hover': { bgcolor: '#ffa000' } }}>
                        Kontakt
                    </Button>
                </Box>
                {/* Hamburger na małych ekranach */}
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenuOpen}
                    sx={{ display: { xs: 'flex', md: 'none' } }}
                >
                    <MenuIcon sx={{ color: '#b28704' }} />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={menuOpen}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    PaperProps={{
                        elevation: 6,
                        sx: {
                            mt: 1,
                            borderRadius: 3,
                            minWidth: 180,
                            bgcolor: 'rgba(255, 243, 207, 0.97)',
                            boxShadow: '0 8px 32px 0 rgba(255,179,0,0.18)',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid #ffe082',
                        },
                    }}
                >
                    <MenuItem
                        onClick={() => {
                            handleScroll('about');
                            handleMenuClose();
                        }}
                        sx={{
                            color: '#b28704',
                            fontWeight: 600,
                            borderRadius: 2,
                            mx: 1,
                            my: 0.5,
                            px: 2,
                            transition: 'background 0.2s',
                            '&:hover': {
                                bgcolor: '#ffe082',
                                color: '#b28704',
                            },
                        }}
                    >
                        O nas
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            handleScroll('oferta');
                            handleMenuClose();
                        }}
                        sx={{
                            color: '#b28704',
                            fontWeight: 600,
                            borderRadius: 2,
                            mx: 1,
                            my: 0.5,
                            px: 2,
                            transition: 'background 0.2s',
                            '&:hover': {
                                bgcolor: '#ffe082',
                                color: '#b28704',
                            },
                        }}
                    >
                        Oferta
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            handleScroll('kontakt');
                            handleMenuClose();
                        }}
                        sx={{
                            color: '#fff',
                            fontWeight: 600,
                            borderRadius: 2,
                            mx: 1,
                            my: 0.5,
                            px: 2,
                            bgcolor: '#ffb300',
                            boxShadow: '0 2px 8px 0 rgba(255, 179, 0, 0.12)',
                            transition: 'background 0.2s',
                            '&:hover': {
                                bgcolor: '#ffa000',
                                color: '#fff',
                            },
                        }}
                    >
                        Kontakt
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}
