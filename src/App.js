import React from 'react';
import {spacexContext} from './context/ContextProvider'

import FilterBox from './components/FilterBox'
import LaunchPad from './containers/LaunchPad'

function App() {
  const { firstLoad, loading, shuttles } = React.useContext(spacexContext)

  return (
    <div className="App">
      <header>SpacEx Launch Programs</header>
      {firstLoad ? <div className ='firstloader'></div> : 
      <div className = 'container'>
        <section>
          <FilterBox/>
        </section>
        <main>
          <LaunchPad data = {shuttles}/>
        </main>
      </div>
      }
      {firstLoad ? null : loading ? <div className='small-loader'></div> : null } 
      {firstLoad ? null :
      <footer> Developed by Akash Gupta </footer>
      }
    </div>
  );
}

export default App;
