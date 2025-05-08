import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HiveIcon from '@mui/icons-material/Hive';

export default function ContactSection() {
    return (
        <Box id="kontakt" sx={{ py: 6 }}>
            <Container maxWidth="md" disableGutters>
                <Paper
                    elevation={6}
                    sx={{
                        p: { xs: 2, md: 3 },
                        borderRadius: 4,
                        bgcolor: '#fffde7',
                        border: '2px solid #ffd54f',
                        boxShadow: '0 8px 24px 0 rgba(255, 213, 79, 0.18)',
                        minHeight: 300,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {/* Zwiększenie rozmiaru nagłówka */}
                    <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                        <HiveIcon sx={{ fontSize: 40, color: '#ffb300', mr: 1 }} /> {/* Zwiększenie ikony */}
                        <Typography variant="h4" fontWeight={700} color="#ffb300" gutterBottom>
                            Kontakt
                        </Typography>
                    </Box>

                    {/* Zwiększenie rozmiaru podtytułu */}
                    <Typography variant="h6" align="center" color="textSecondary" mb={3}>
                        Skontaktuj się z nami!
                    </Typography>

                    {/* Wiersz: telefon, e-mail i adres */}
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} sm={4}>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <PhoneIcon sx={{ color: '#ffb300', mr: 1, fontSize: 28 }} /> {/* Zwiększenie ikony */}
                                {/* Zwiększenie rozmiaru tekstu */}
                                <Typography variant="h6" fontWeight={500}>
                                    +48 696 244 393
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <EmailIcon sx={{ color: '#ffb300', mr: 1, fontSize: 28 }} /> {/* Zwiększenie ikony */}
                                <Typography variant="h6" fontWeight={500}>
                                    UZUPEŁNIĆ I STWORZYĆ MAILA
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <LocationOnIcon sx={{ color: '#ffb300', fontSize: 28, mr: 1 }} /> {/* Zwiększenie ikony */}
                                <Typography variant="h6" fontWeight={500}>
                                    68-320 Jasień, Miejscowość Guzów
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
}
