import Head from 'next/head';
import PropTypes from 'prop-types';

export default function SetTitle({ text, image }) {
    const defaultTitle = 'Pasieka - Guzów';
    const pageTitle = text ? `${text} - ${defaultTitle}` : defaultTitle;
    const pageDescription = 'Naturalny miód prosto z pasieki w Guzowie.';
    const imageUrl = image || 'https://twoja-domena.pl/images/favicon.svg'; // Uwaga: musi być PEŁNY adres URL!

    return (
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />

            {/* OG meta tags */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.pasiekaguzow.pl" />

            {/* Twitter (opcjonalnie) */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={imageUrl} />
        </Head>
    );
}

SetTitle.propTypes = {
    text: PropTypes.string,
    image: PropTypes.string,
};
