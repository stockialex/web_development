import './App.css';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import { useState } from 'react';
import CreateNote from './components/CreateNote';


function App() {
  const [notes, setNotes] = useState([])

  function addNote(newNote){
    setNotes(previousNotes => {
      return [...previousNotes, newNote]
    })
    console.log(newNote)
  }

  function deleteNote(id){
    setNotes((item) => (
      notes.filter((note, index) => (
        index !== id
      ))
    ))
  }

  return (
    <div className="App">
      <Header />
        <CreateNote onAdd={addNote}/>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent='center' spacing={2}>
              {notes.map((item, index) =>(
                <Grid key={index} item>
                  <Note 
                    id={index}
                    title={item.noteTitle} 
                    content={item.noteContent}
                    onDelete={deleteNote}   
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid> 
      <Footer />
    </div>
  );
}

export default App;
