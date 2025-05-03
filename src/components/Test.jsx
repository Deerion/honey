import React, { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase';  // Używamy named importu

const Test = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Pobranie danych z Supabase
    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('items')
                .select('*');

            if (error) {
                console.error('Error fetching data: ', error);
            } else {
                console.log('Fetched data: ', data); // Dodajemy logowanie danych
                setData(data); // Ustawiamy dane w stanie
            }
            setLoading(false); // Kończymy ładowanie
        };

        fetchData();
    }, []); // Tylko raz przy renderowaniu komponentu

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Items from Supabase:</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default Test;
