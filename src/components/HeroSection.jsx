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
                color: '#5D3A00', // ciemny miodowy/brązowy tekst
                backgroundImage: 'url(/images/honey-hero.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                textAlign: 'center',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,

                    zIndex: 1,
                },
            }}
        >
            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
                <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                    <Typography
                        variant="h3"
                        component="h1"
                        fontWeight="bold"
                        sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)', letterSpacing: 1 }}
                    >
                        Naturalny miód z własnej pasieki
                    </Typography>
                </Box>
                <Typography
                    variant="h6"
                    sx={{
                        mb: 4,
                        fontWeight: 500,
                        color: '#6D4C00',
                        textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
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
            </Container>
        </Box>
    );
}
