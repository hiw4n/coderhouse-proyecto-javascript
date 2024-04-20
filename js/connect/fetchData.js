/* import productsJSON from '../data/products.js';
 */
/* const urlApi = '../data/products.json'; */
async function fetchData(urlApi) {
  try {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('error fetchData:', error);
  }
}

export default fetchData;
