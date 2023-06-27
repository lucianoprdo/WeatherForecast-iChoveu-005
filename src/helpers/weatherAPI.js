// Remova os comentários a medida que for implementando as funções

export const searchCities = (term) => {
  return fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${import.meta.env.VITE_TOKEN}&q=${term}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        window.alert('Nenhuma cidade encontrada');
        return [];
      }
      return data;
    })
    .catch((error) => {
      console.error('Ocorreu um erro em sua requisição:', error);
      return [];
    });
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
