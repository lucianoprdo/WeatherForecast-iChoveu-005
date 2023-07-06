// Remova os comentários a medida que for implementando as funções

const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = (term) => {
  return fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`)
    .then((response) => response.json())
    .then((data) => {
      if (!term || data.length === 0) {
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

export const getWeatherByCity = async (url) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${url}`,
    );
    const data = await response.json();

    const {
      current: {
        temp_c: temp,
        condition: { icon, text: condition },
      },
      location: { name, country },
    } = data;

    return {
      name,
      country,
      temp,
      condition,
      icon,
      url,
    };
  } catch (error) {
    console.error('Error:', error);
  }
};
