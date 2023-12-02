import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { NewNotes } from "./components/NewNotes";
import { NotesBox } from "./components/NotesBox";



function App() {
    const [addNote, setAddNotes] = useState([]);
    const newNote = (note) => {
        setAddNotes((prevData) => {
            return [...prevData, note];
        });
    };


    const deleteEvent = (id) => {
        setAddNotes((lastData) =>
            lastData.filter((currdata, index) => {
                return index !== id
            })
        )
    }

    return ( <
        div className = "App" >
        <
        Header > < /Header> <
        NewNotes propsNotes = { newNote }
        /> {
        addNote.map((value, index) => {
            return ( <
                NotesBox id = { index }
                key = { index }
                title = { value.heading }
                content = { value.content }
                deleteItem = { deleteEvent }
                />
            );
        })
    } < /
    div >
);
}

export default App;