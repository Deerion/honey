import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HiveIcon from '@mui/icons-material/Hive';

export default function ContactSection() {
    return (
        <Box id="kontakt" sx={{ py: 8 }}>
            <Container maxWidth="sm">
                <Paper
                    elevation={6}
                    sx={{
                        p: { xs: 3, md: 5 },
                        borderRadius: 4,
                        bgcolor: '#fffde7',
                        border: '2px solid #ffd54f',
                        boxShadow: '0 8px 24px 0 rgba(255, 213, 79, 0.18)',
                        minHeight: 350,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                        <HiveIcon sx={{ fontSize: 40, color: '#ffb300', mr: 1 }} />
                        <Typography variant="h4" fontWeight={700} color="#ffb300" gutterBottom>
                            Kontakt
                        </Typography>
                    </Box>
                    <Typography variant="subtitle1" align="center" color="textSecondary" mb={3}>
                        Skontaktuj się z nami!
                    </Typography>
                    {/* Wiersz: telefon i e-mail */}
                    <Box display="flex" justifyContent="center" alignItems="center" mb={2} gap={4} flexWrap="wrap">
                        <Box display="flex" alignItems="center">
                            <PhoneIcon sx={{ color: '#ffb300', mr: 1, fontSize: 24 }} />
                            <Typography variant="body1" fontWeight={500}>
                                +48 696 244 393
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <EmailIcon sx={{ color: '#ffb300', mr: 1, fontSize: 24 }} />
                            <Typography variant="body1" fontWeight={500}>
                                UZUPEŁNIĆ I STWORZYĆ MAILA
                            </Typography>
                        </Box>
                    </Box>
                    {/* Wiersz: adres */}
                    <Box display="flex" alignItems="center" justifyContent="center" mt={1}>
                        <LocationOnIcon sx={{ color: '#ffb300', fontSize: 28, mr: 1 }} />
                        <Typography
                            variant="body1"
                            fontWeight={500}
                            align="center"
                        >
                            68-320 Jasień, Miejscowość Guzów
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}
