import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import VisitingPlace from "../VisitingPlace/VisitingPlace";
import "./Home.css";

const Home = () => {
  const visitingPlace = useLoaderData();
  console.log(visitingPlace);
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} lg={4}>
            <h1>Cox's Bazar</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              delectus quod consequuntur facilis quam, non placeat incidunt
              molestias ipsa dignissimos quae aliquam, doloribus debitis ex.
              Inventore consequuntur exercitationem facilis voluptatibus!
            </p>
            <Button variant="btn btn-warning">
              Booking <BsArrowRight></BsArrowRight>
            </Button>
          </Col>
          <Col sm={12} lg={8}>
            <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center allPlacess">
              {visitingPlace.map((place) => (
                <VisitingPlace key={place.id} place={place}></VisitingPlace>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
