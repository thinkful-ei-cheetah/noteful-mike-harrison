import React from './node_modules/react';
import {Link} from './node_modules/react-router-dom';
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