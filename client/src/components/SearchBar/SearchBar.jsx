import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNamePoke } from '../../redux/actions.js';
import s from './SearchBar.module.css';

const SearchBar = ({setcurrentPage}) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handlerInputChanged = (event) => {
        event.preventDefault();
        setName(event.target.value.toLowerCase()); // verificar despues de observar en browser
    };

    const handlerSubmit = (event) => {
        event.preventDefault();
        if (name === ''){
            alert('Please enter a name');
        }else{
            dispatch(getNamePoke(name));
            setcurrentPage(() => 1);
            setName('');

        }
    };

    return (
        <>
            <form>
                <input 
                    autoFocus
                    className={s.inputSearchBar}
                    type='text'
                    placeholder='Busca tu pokemon'
                    value={name}
                    onChange={(e) => handlerInputChanged(e)}

                />

                <button
					className={s.buttonSearchBar}
					type='submit'
					onClick={(e) => handlerSubmit(e)}
				>
					Search
				</button>
            </form>
        </>
    )
}

export default SearchBar;