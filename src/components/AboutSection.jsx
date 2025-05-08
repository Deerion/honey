import { Box, Typography, Container } from '@mui/material';

export default function AboutSection() {
    return (
        <Box id="about" sx={{ py: 6, px: 2 }}>
            <Container maxWidth="md" disableGutters>
                <Typography variant="h4" gutterBottom color="#ffb300" fontWeight={700}>
                    O naszej pasiece
                </Typography>
                <Typography variant="body1">
                    Nasza pasieka to rodzinna inicjatywa prowadzona od lat w malowniczej miejscowości Guzów.Z pasją i zaangażowaniem zajmujemy się pszczołami, a miód kręcimy zawsze w gronie najbliższych. Dla nas pszczelarstwo to nie tylko praca, ale przede wszystkim tradycja i sposób na wspólne spędzanie czasu. Dbamy o dobrostan naszych pszczół, korzystamy z naturalnych metod i czerpiemy radość z każdego sezonu. Miód z naszej pasieki to efekt troski, doświadczenia i rodzinnej współpracy – smakuje wyjątkowo, bo powstaje z serca i z miłości do natury oraz tradycji.
                </Typography>
            </Container>
        </Box>
    );
}
