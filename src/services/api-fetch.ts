
export async function getPokemon(name:string) {
  try {
    const url_base = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const response = await fetch(url_base);
    if (!response.ok) {
      throw new Error('Hubo un error en la solicitud ' + response.status);
    } 
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Hubo un problema con la solicitud fetch:', error);
    throw error;
  }
  
}