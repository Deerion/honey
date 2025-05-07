import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HiveIcon from '@mui/icons-material/Hive';
import Box from '@mui/material/Box';

export default function Header() {
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
                bgcolor: 'rgba(255, 243, 207, 0.95)', // lekko przezroczysty miodowy
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
                        Guzów - Honey
                    </Typography>
                </Box>
                <Button
                    onClick={() => handleScroll('about')}
                    sx={{
                        color: '#b28704',
                        fontWeight: 600,
                        borderRadius: 2,
                        mx: 1,
                        px: 2,
                        transition: 'background 0.2s',
                        '&:hover': {
                            bgcolor: '#ffe082',
                        },
                    }}
                >
                    O nas
                </Button>
                <Button
                    onClick={() => handleScroll('oferta')}
                    sx={{
                        color: '#b28704',
                        fontWeight: 600,
                        borderRadius: 2,
                        mx: 1,
                        px: 2,
                        transition: 'background 0.2s',
                        '&:hover': {
                            bgcolor: '#ffe082',
                        },
                    }}
                >
                    Oferta
                </Button>
                <Button
                    onClick={() => handleScroll('kontakt')}
                    sx={{
                        color: '#fff',
                        fontWeight: 600,
                        borderRadius: 2,
                        mx: 1,
                        px: 2,
                        bgcolor: '#ffb300',
                        boxShadow: '0 2px 8px 0 rgba(255, 179, 0, 0.12)',
                        transition: 'background 0.2s',
                        '&:hover': {
                            bgcolor: '#ffa000',
                        },
                    }}
                >
                    Kontakt
                </Button>
            </Toolbar>
        </AppBar>
    );
}
