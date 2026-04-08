import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        if (!response.ok) {
          throw new Error(`Erro de rede: ${response.status} ${response.statusText}`);
        }

        const jsonData = await response.json();

        setData(jsonData);

      } catch (err) {
        console.error("Falha ao buscar dados:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // --- Lógica de Renderização Condicional ---
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-xl font-semibold text-gray-700 p-4 rounded-lg shadow-md bg-white">
          Carregando dados...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-red-100">
        <div className="text-xl font-bold text-red-700 p-4 rounded-lg shadow-md bg-white border border-red-400">
          Erro: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-8 bg-blue-50 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Dados da API</h2>
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
        {data ? (
          <>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{data.title}</h3>
            <p className="text-gray-600 mb-4">{data.body}</p>
            <p className="text-sm text-gray-500">ID do Post: {data.id}</p>
            <p className="text-sm text-gray-500">ID do Usuário: {data.userId}</p>
          </>
        ) : (
          <p className="text-gray-600">Nenhum dado encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default DataFetcher;