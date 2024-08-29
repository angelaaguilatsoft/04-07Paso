
export const APIPizza = async (ProductCode) => {

  const url = `http://localhost:5000/api/pizzas/${ProductCode}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;

};