import { useState } from 'react';
import './App.css';
import Gallery from './gallery/gallery';
import SearchBox from './search/search';
import ImageData from './data/data.json';
import { useEffect } from 'react';

function App() {
  const [images, setImages] = useState(ImageData);
  const [searchResult, setSearchResults] = useState('');

  useEffect(() => {
      setImages(ImageData)
      setSearchResults(ImageData)
  }, [])

  return (
    <div className="App">
      <h1>My Gallery </h1>
      <section>
      <SearchBox data={images} setSearchResults={setSearchResults}/>
      </section>
      <section>
        <Gallery images={searchResult}/>
      </section>
    </div>
  );
}

export default App;
