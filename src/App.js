import React from 'react';
import {spacexContext} from './context/ContextProvider'

import FilterBox from './components/FilterBox'
import LaunchPad from './containers/LaunchPad'

function App() {
  const { firstLoad, loading, shuttles, filterYear } = React.useContext(spacexContext)

  React.useEffect(() => {
    let div = document.getElementsByClassName('year-container')
    if(div[0] !== undefined ){
      div[0].addEventListener('click', (e) => filterYear(e) )
    }
    return () => div[0].removeEventListener('click', (e) => filterYear(e) )
  }
  ,[firstLoad])

  return (
    <div className="App">
      <header>SpacEx Launch Programs</header>
      {firstLoad ? <div className ='firstloader'></div> : 
      <div className = 'container'>
        <FilterBox/>
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
