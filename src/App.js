import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context';
import './App.css'
import Home from './pages/home/Home';
import About from './pages/about/About';
import BookList from './components/book-list/BookList';
import BookDetails from './components/book-details/BookDetails';

export default function App () {

  return (
      <AppProvider>
          <BrowserRouter>
              <Routes>
                 <Route path="/boobook" element={<Home />}></Route>
                  <Route path="/" element={<Home />}>
                      <Route path="about" element={<About />} />
                      <Route path="book" element={<BookList />} />
                      <Route path="/book/:id" element={<BookDetails />} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </AppProvider>
  );



} 
   
