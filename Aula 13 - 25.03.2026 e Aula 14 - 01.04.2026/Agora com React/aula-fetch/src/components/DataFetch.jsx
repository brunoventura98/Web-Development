import React, {useState, useEffect} from 'react';

function DataFetch () {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true); // isso não serve para a primeira vez, porque eles já iniciam nesse valor, esse serve para as próximas vezes
                setError(null);

                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // await vai aguardar a resposta dele

                if (!response.ok) { // ! é para dizer o contrário e o ok para retornar se deu certo ou não a requisição
                    // isso é para identificar erro de requisição, erros de servidor, etc
                    throw new Error(`Erro de rede: ${response.status} ${response.statusText}`); // vai lançar um novo erro caso a requisição não estiver sido respondida
                }

                const jsonData = await response.json(); // pego os dados e coloco em json

                setData(jsonData);

            } catch (err) { // para identificar erros de programação
                console.error("Falha ao buscar dados: ", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData(); // chamamos a função
    }, []) // array vazia para
    
    if(loading) {
        return ( // no react return é sempre com ()
            <div className='flex justify-center items-center h-screen bg-gray-200'>   
                <h1 className='text-xl font-semibold text-gray-700 p-4 rounded-lg shadow-md bg-white'>
                    Carregando dados...
                </h1>
            </div>
        )
    }

    if(error) {
        return ( 
            <div className='flex justify-center items-center h-screen bg-gray-200'>   
                <h1 className='text-xl font-semibold text-red-700 p-4 rounded-lg shadow-md bg-white border-red-700'>
                    Erro: {error}
                </h1>
            </div>
        )
    }

    return( // se deu tudo certo
        <div>
            <h1>Dados da API</h1>
            <div>
                {data ? (
                    <>
                        <h3>{data.title}</h3>
                        <p>{data.body}</p>
                        <p>{data.id}</p>
                        <p>{data.userId}</p>
                    </>
                ) : (
                    <p>Nenhum dado encontrado</p>
                )}
            </div>
        </div>
    )
}

export default DataFetch;