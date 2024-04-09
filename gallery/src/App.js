import './App.css';
import Gallery from './gallery/gallery';

function App() {
  return (
    <div className="App">
      <h1> Top 2 Galleries </h1>
      <section>
        <Gallery 
          type={"food"}
        />
      </section>
      <section>
        <Gallery 
          type={"mountains"}
        />
      </section>
    </div>
  );
}

export default App;
