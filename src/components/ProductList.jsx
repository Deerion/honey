import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard';

const products = [
    { id: 1, name: 'Miód lipowy', desc: 'Miód lipowy to jeden z najbardziej cenionych polskich miodów. Charakteryzuje się jasnym, złocistym kolorem oraz wyjątkowym, delikatnym aromatem kwiatów lipy z subtelną nutą ziołową. W smaku jest wyrazisty, lekko pikantny, z delikatną goryczką i wyczuwalną słodyczą.\n' +
            '\n' +
            'Dzięki swoim właściwościom miód lipowy doskonale sprawdza się w okresie przeziębień i grypy – wspomaga odporność, działa napotnie i łagodzi kaszel. Idealny do herbaty, deserów oraz jako naturalny słodzik do napojów.\n' +
            '\n' +
            'Miód pochodzi z naszej rodzinnej pasieki, w której dbamy o najwyższą jakość i naturalność produktu.', price: '50 zł', image: '/images/rzepakowy.jpg', availability: 'Niedostępny' },
    { id: 2, name: 'Miód wielokwiatowy', desc: 'Miód wielokwiatowy, nazywany również „miodem tysiąca kwiatów”, to uniwersalny i bardzo popularny rodzaj miodu o bogatym, kwiatowym aromacie i słodkim smaku. Jego barwa oraz intensywność smaku zależą od pory zbioru – wiosenny jest jaśniejszy i delikatniejszy, natomiast letni ciemniejszy i bardziej wyrazisty. Powstaje z nektaru wielu różnych roślin, dzięki czemu wyróżnia się różnorodnością składników i naturalnych wartości odżywczych. Miód wielokwiatowy doskonale sprawdza się jako słodzik do herbaty, dodatek do wypieków oraz smarowidło na pieczywo. Jest ceniony za swoje właściwości wspierające odporność i korzystny wpływ na układ trawienny.', price: '50 zł', image: '/images/rzepakowy.jpg', availability: 'Niedostępny' },
    { id: 3, name: 'Miód rzepakowy', desc: 'Miód rzepakowy wyróżnia się bardzo jasną, słomkową barwą, która po krystalizacji staje się niemal biała lub kremowa. Jego smak jest wyjątkowo łagodny, delikatnie słodki, czasem z subtelną nutą goryczki, a aromat lekko kwiatowy i nienachalny. Dzięki swojej kremowej, miękkiej konsystencji doskonale nadaje się do smarowania na pieczywie, naleśnikach czy gofrach, a także jako dodatek do herbaty. Miód rzepakowy jest szczególnie polecany dzieciom oraz osobom preferującym delikatniejsze miody. Zawiera dużo glukozy, dzięki czemu szybko krystalizuje, a jednocześnie jest łatwo przyswajalny przez organizm. Wspiera odporność, korzystnie wpływa na pracę serca i układu krążenia oraz pomaga w stanach wyczerpania organizmu.', price: '45 zł', image: '/images/rzepakowy.jpg', availability: 'Dostępny' },
    // Dodaj kolejne produkty
];


export default function ProductList() {
    return (
        <Grid
            container
            spacing={4}
            sx={{
                py: 6,
                px: 2, // Dodaje odstęp od lewej i prawej
                maxWidth: 'lg',
                margin: '0 auto',
                justifyContent: 'center',
            }}
        >
            {products.map(product => (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={product.id}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <ProductCard {...product} />
                </Grid>
            ))}
        </Grid>
    );
}
