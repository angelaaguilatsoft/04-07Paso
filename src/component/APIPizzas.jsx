
export const APIPizzas = async () => {

  const url = "http://localhost:5000/api/pizzas/";

  const response = await fetch(url);
  const data = await response.json();

  return data;

};