import React from 'react';
import SideNav from './components/SideNav';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import MainPlayer from './components/mainPlayer';

class App extends React.Component {
 
  render() {
  return (
    <div className="App">
      <SideNav/>
      <br/>
      <MainPlayer/>
        
    </div>
  );
}
}

export default App;
