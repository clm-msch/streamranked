import React, { useEffect } from 'react';
import { supabase } from '../../lib/supabase/supabase';

const TestSupabase = () => {
    useEffect(() => {
        const testSupabaseConnection = async () => {
            const { data, error } = await supabase
                .from('your_table_name') // Remplacez par le nom de votre table
                .select('*')
                .limit(1);

            if (error) {
                console.error('Erreur de connexion à Supabase:', error);
            } else {
                console.log('Données récupérées de Supabase:', data);
            }
        };

        testSupabaseConnection();
    }, []);

    return (
        <div>
            <h1>Test de la Connexion Supabase</h1>
            <p>Regardez la console pour les résultats du test.</p>
        </div>
    );
};

export default TestSupabase;
