import Head from 'next/head';
import PropTypes from 'prop-types';

export default function SetTitle({ text, image }) {
    const defaultTitle = 'Pasieka - Guzów';
    const imageUrl = image || '/images/favicon.svg';

    return (
        <Head>
            <title>{text ? `${text} - Pasieka - Guzów` : defaultTitle}</title>
            <meta property="og:image" content={imageUrl} />
        </Head>
    );
}

SetTitle.propTypes = {
    text: PropTypes.string,
    image: PropTypes.string,
};
