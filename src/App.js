import { Component } from 'react';
import shortid from 'shortid';
import Section from './Section';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    this.state.contacts !== prevState.contacts &&
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    console.log('rend');
  }

  componentDidMount() {
    const storageParse = JSON.parse(localStorage.getItem('contacts'));

    storageParse !== null &&
      storageParse.length !== 0 &&
      this.setState({
        contacts: storageParse,
      });
  }

  idGen = () => shortid.generate();

  submitHandler = data => {
    const newContact = {
      name: data.name,
      number: data.number,
      id: this.idGen(),
    };

    this.setState(prevState => {
      if (
        prevState.contacts.find(contact => contact.name === newContact.name)
      ) {
        alert(`${newContact.name} is already in contacts`);
      } else {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      }
    });
  };

  handleFilter = e => this.setState({ filter: e.target.value });

  handleDelContact = id =>
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(req =>
      req.name.toLowerCase().includes(normalizedFilter),
    );
    return (
      <>
        <Section title={'Phonebook'} main={true}>
          <ContactForm submitHandler={this.submitHandler} />
        </Section>
        <Section title={'Contacts'}>
          <Filter value={filter} onFilter={this.handleFilter} />
          <ContactList
            contacts={visibleContacts}
            delContact={this.handleDelContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
