import CardPizza from '../component/CardPizza.jsx'
import { APIPizzas } from '../component/APIPizzas.jsx';
import Row from "react-bootstrap/Row";
import { Container } from 'react-bootstrap';
import { useEffect } from "react";
import { useState } from "react";


const Home = () => {
// Estados
  const [pizzas, setPizzas] = useState([]);

  const loadData = async () => {
    const result = await APIPizzas();
    setPizzas(result);
  }

  useEffect(() => {
    loadData();
  }, []);

  
  return (
    <>
      <Container fluid className=" py-3 mx-2">
        <Row xs={1} md={2} className="g-4">
          {pizzas.map((pizza) => (
            <CardPizza key={pizza.id} pizza={pizza} />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;