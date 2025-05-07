import Box from '@mui/material/Box';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductList from '@/components/ProductList';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: '#fffbee',
                background: 'linear-gradient(135deg, #fffbee 60%, #ffe082 100%)',
            }}
        >
            <Header />
            <HeroSection />
            <AboutSection />
            <div id="oferta" style={{ scrollMarginTop: '64px' }}>
                <ProductList />
            </div>
            <ContactSection />

            <Footer />
        </Box>
    );
}
