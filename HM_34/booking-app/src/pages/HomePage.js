import React from "react";
import styled from "styled-components";
import SearchForm from "../components/SearchForm";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30vh;
  width: 100vw;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <Title>Найти отели</Title>
      <SearchForm />
    </HomePageContainer>
  );
};

export default HomePage;
