import { createTheme } from '@mui/material/styles';
import { Noto_Sans_Inscriptional_Parthian } from 'next/font/google';

const notoFont = Noto_Sans_Inscriptional_Parthian({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});

export const themeOptions = {
    palette: {
        primary: {
            main: '#FFA726', // Twój kolor główny
        },
        secondary: {
            main: '#9CCC65', // Twój kolor dodatkowy
        },
        background: {
            default: '#fffbe6', // Kolor tła strony
            paper: '#ffffff',   // Kolor tła elementów typu "paper"
        },
        text: {
            primary: '#222',   // Kolor głównego tekstu
            secondary: '#666', // Kolor tekstu dodatkowego
        },
    },
    typography: {
        fontFamily: [
            notoFont.style.fontFamily,
            'Helvetica',
            'Roboto',
            'Arial',
            'sans-serif',
        ].join(','),
    },
    // ... reszta konfiguracji
};

export default createTheme(themeOptions);
