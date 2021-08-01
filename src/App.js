import './App.css';
import JokeCard from './components/JokeCard';

const catagories = ['Programming', 'Dark', 'Miscellaneous', 'Pun'];

const App = () => {
  return (
    <div className="App">
      <div className="container">
        {catagories.map((category) => (
          <JokeCard key={category} category={category} />
        ))}
      </div>
    </div>
  );
};

export default App;
