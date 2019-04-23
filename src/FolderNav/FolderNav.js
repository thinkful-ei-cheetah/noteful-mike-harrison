import React from 'react';
import {NavLink} from 'react-router-dom';
import './FolderNav.css';
export default function FolderNav(props){
    return (
        <div className='NoteListNav'>
          <ul className='NoteListNav__list'>
            {props.folders.map(folder =>
              <li key={folder.id}>
                <NavLink
                  className='NoteListNav__folder-link'
                  to={`/folder/${folder.id}`}
                >
                  {folder.name}
                </NavLink>
              </li>
            )}
          </ul>
          <div className='NoteListNav__button-wrapper'>
            <button
              type='button'
              className='NoteListNav__add-folder-button'
            >
             Add Folder
            </button>
          </div>
          </div>
      )
}
