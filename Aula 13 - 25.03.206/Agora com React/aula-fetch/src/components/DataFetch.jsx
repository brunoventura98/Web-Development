import React, {useState, useEffect} from 'react';
import { resolveConfig } from 'vite';

function DataFetch () {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch('https://jsonplaceholder.typicode.com/posts');

                if (!response.ok) {
                    throw new Error(`Erro de rede: ${response.status} ${response.statusText}`);
                }

                const jsonData = await response.json();

                setData(jsonData);
            } catch (err) {
                console.error("Falha ao buscar dados: ", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData(); 
    }, [])
    
}