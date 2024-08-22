import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ItemsList from './components/ItemsList';

function App() {
  return (
      <div className="App">
        <Header />
        <MainContent />
        <ItemsList />
        <Footer />
      </div>
  );
}

export default App;
