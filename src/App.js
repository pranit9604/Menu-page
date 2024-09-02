import React, { useState } from 'react';
import TileView from './components/TileView';
import ExpandedTile from './components/ExpandedTile';
import GridView from './components/GridView';
import HamburgerMenu from './components/HamburgerMenu';
import HorizontalMenu from './components/HorizontalMenu';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleTileClick = (user) => {
    setSelectedUser(user);
  };

  const handleBackClick = () => {
    setSelectedUser(null);
  };

  return (
    <div>
      <HorizontalMenu/>
      {selectedUser ? (
        <ExpandedTile user={selectedUser} onBack={handleBackClick} />
      ) : (
        <TileView onTileClick={handleTileClick} />
        
      )}
    <GridView/>
    <HamburgerMenu/>
    
    </div>
  );
};

export default App;