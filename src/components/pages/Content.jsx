import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard.jsx";
import AllProducts from "./allproduct/AllProduct.jsx";
import AddItem from "./AddItem";
import Categories from "./categories/Categories.jsx";
import { Container } from "react-bootstrap";
import "./Content.css";

const Content = ({ inputText }) => {
  // const {pathname}=useLocation();
  // const tab=pathname
  // console.log(pathname,"pathname");
  return (
    <Container className="content-container">
      {/* <h3>{pathname}</h3> */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="" element={<Navigate to="/dashboard" />} />
        <Route
          path="/products/allproducts"
          element={<AllProducts inputText={inputText} />}
        />
        <Route path="/products/addItem" element={<AddItem />} />
        <Route path="/products/category" element={<Categories />} />
        <Route />
      </Routes>
    </Container>
  );
};

export default Content;
