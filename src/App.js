import React from 'react';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/AppContainer/ItemListContainer';

class App extends React.Component {
  render() {
    return (
<div>
      <NavBar/>
      <ItemListContainer/>

</div>
    );
  }
}

export default App;