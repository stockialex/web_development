import './App.css';
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import notes from './notes'
import Login from './components/Login';

const isLoggedIn = true

function App() {
  return (
    <div className="App">
      <Header />

      {isLoggedIn ? <h1>Hello user</h1> : <Login />
      
    }
    {notes.map((item) =>(
      <Note 
        key={item.key}
        title={item.title} 
        content={item.content}   
      />
    ))}

      <Footer />
    </div>
  );
}

export default App;
