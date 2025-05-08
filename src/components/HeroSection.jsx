import { Box, Typography, Container, Button } from '@mui/material';

export default function HeroSection() {
    const handleScrollToOferta = () => {
        const section = document.getElementById('oferta');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box
            sx={{
                position: 'relative',
                py: { xs: 8, md: 14 },
                color: '#5D3A00',
                backgroundImage: 'url(/images/hero.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed', // jeśli chcesz efekt paralaksy
                textAlign: 'center',
            }}
        >
            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
                <Box
                    sx={{
                        display: 'inline-block',
                        px: { xs: 2, md: 6 },
                        py: { xs: 3, md: 5 },
                        borderRadius: 4,
                        bgcolor: 'rgba(255, 243, 207, 0.75)', // jasne półprzezroczyste tło
                        boxShadow: '0 6px 32px 0 rgba(255,179,0,0.10)',
                        backdropFilter: 'blur(1px)', // rozmycie tła
                        mx: 'auto',
                    }}
                >
                    <Typography
                        variant="h3"
                        component="h1"
                        fontWeight="bold"
                        sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)', letterSpacing: 1 }}
                    >
                        Naturalny miód z własnej pasieki
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 4,
                            fontWeight: 500,
                            color: '#6D4C00',
                            textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
                        }}
                    >
                        Zdrowie prosto z ula – spróbuj naszych miodów!
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={handleScrollToOferta}
                        sx={{
                            bgcolor: '#FFB300',
                            color: '#4E342E',
                            fontWeight: 'bold',
                            px: 5,
                            py: 1.5,
                            boxShadow: '0 4px 15px rgba(255, 179, 0, 0.4)',
                            '&:hover': {
                                bgcolor: '#F9A825',
                                boxShadow: '0 6px 20px rgba(255, 179, 0, 0.6)',
                            },
                            transition: 'all 0.3s ease',
                        }}
                    >
                        Zobacz ofertę
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
