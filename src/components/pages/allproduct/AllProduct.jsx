import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, CardFooter, Container } from "react-bootstrap";
import "./AllProduct.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AllProduct = ({ inputText }) => {
  const [allData, setAllData] = useState([]);

  // useEffect(() => {
  //   async function searchData() {
  //     try {
  //       const res = await axios.get(
  //         `https://dummyjson.com/products/search?q=${inputText}`
  //       );
  //       // console.log(res.data, "res.data");
  //       setAllData(res.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   searchData();
  // }, [inputText]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        // console.log(response.data.products);
        setAllData(response.data.products);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="products-container">
      {allData?.map((el) => {
        return (
          <Card
            key={el.id}
            style={{ width: "15rem", justifyContent: "space-between" }}
          >
            <Card.Img
              variant="top"
              src={el.images[0]}
              style={{ height: "13rem" }}
            />
            <Card.Body style={{ height: "10rem" }}>
              <Card.Title>{el.title}</Card.Title>
              <Card.Text>
                {el.description.length > 56
                  ? el.description.slice(0, 55) + "..."
                  : el.description}
              </Card.Text>
            </Card.Body>
            <CardFooter className="card-footers">
              <div variant="primary" className="card-prices">
                $ {el.price}
              </div>
              <Button
                variant="primary"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "black",
                  fontWeight: "700",
                }}
              >
                {el.rating}

                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#FFD43B", marginBottom: "5px" }}
                />
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default AllProduct;
