import React from 'react';
import Note from '../Note/Note';
import './Notelist.css';

export default class Notelist extends React.Component{
    render(){
        const noteList =this.props.notes.map((note)=>{
            return Note(note)
        })
        return(
            <>
            {noteList}
            </>
        )
    }
}