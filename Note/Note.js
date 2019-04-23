import React from 'react'
import { Link } from 'react-router-dom'
import './Note.css'

export default function Note(props) {
    return (
      <div className='Note'>
        <h2 className='Note__title'>
          <Link to={`/note/${props.id}`}>
            {props.name}
          </Link>
        </h2>
        <button className='Note__delete' type='button'>
          Delete Note
        </button>
        <p className="Note__Date">{props.modified}</p>
      </div>
    )
  }