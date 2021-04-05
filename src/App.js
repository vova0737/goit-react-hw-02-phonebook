import './App.css';
import React, { Component } from 'react';
import Container from './Components/Container';
import Section from './Components/Section';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '+380 93 555 77 88' },
  { id: 'id-2', name: 'Hermione Kline', number: '+380 67 442 74 98' },
  { id: 'id-3', name: 'Eden Clements', number: '+380 63 005 71 84' },
  { id: 'id-4', name: 'Annie Copeland', number: '+380 79 815 07 84' },
];

class App extends Component {
  state = {
    contacts: initialState,
    filter: '',
  };



};

export default App;
