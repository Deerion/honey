import { Box, Typography, Container } from '@mui/material';

export default function Footer() {
    return (
        <Box sx={{ py: 3, backgroundColor: '#fbc02d', mt: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="body2" color="text.secondary" align="center">
                    © {new Date().getFullYear()} Pasieka - Guzów. Wszelkie prawa zastrzeżone.
                </Typography>
            </Container>
        </Box>
    );
}
