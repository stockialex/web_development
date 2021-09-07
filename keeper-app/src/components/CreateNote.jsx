import { useState } from 'react';



const CreateNote = (props) => { 
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    
    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }
    
    const handleChangeContent = (event) => {
        setContent(event.target.value)
    }

    const handleSubmit = (event) => {
        let note = {
            noteTitle: title,
            noteContent: content
        }

        props.onAdd(note)
        clearInputs()
        event.preventDefault()
    }
    
    const clearInputs = () => {
        setTitle('')
        setContent('')
    }

    return(
        <div>
            <form>
                <input 
                    type='text' 
                    name={title}
                    value={title} 
                    placeholder='Title'
                    onChange={handleChangeTitle}
                />
                <textarea 
                    name='content' 
                    value={content} 
                    placeholder='Time to take a note...' 
                    rows='3'
                    onChange={handleChangeContent}
                >
                </textarea>
                <button onClick={handleSubmit}>Add</button>
            </form>
        </div>
    )
}

export default CreateNote;