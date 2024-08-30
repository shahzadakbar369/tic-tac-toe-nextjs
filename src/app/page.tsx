import React, { Component } from 'react';
import { Game } from "./components/Game";


const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <Game />
    </div>
  );
};

export default HomePage;
