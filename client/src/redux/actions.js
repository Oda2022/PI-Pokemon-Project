import axios from 'axios';
import {
    GET_POKE,
    TYPE_POKE,
    NAME_POKE,
    DETAIL_POKE,
    DETAIL_CLEAR,
    FILTER_TYPE_POKE,
    FILTER_CREATED_POKE,
    ORDER_ASC_DESC,
    ORDER_ATTACK,
} from './actiontypes.js';

export function getPoke(){
    return async function(dispatch){
        try{
            const {data} = await axios.get("http://localhost:3001/pokemons")
            return dispatch({type:GET_POKE, payload:data})
            
        } catch(error){
            console.log(error);
        }
    };
};


export function getNamePoke(name){
    return async function(dispatch){
        try{
            const {data} = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
            return dispatch({type:NAME_POKE, payload:data})

        } catch(error){
            console.log(error);
        }
    };
};

export function getIDPoke(id){
    return async function(dispatch){
        try{
            const {data} = await axios.get(`http://localhost:3001/pokemons/${id}`)
            return dispatch({type:DETAIL_POKE, payload:data})

        } catch(error){
            console.log(error);
        }
    };
};

export function getTypePoke(){
    return async function(dispatch){
        try{
            const {data} = await axios.get("http://localhost:3001/types")
            return dispatch({type:TYPE_POKE, payload:data})

        } catch(error){
            console.log(error);
        }
    };
};

export function createPoke(payload){
    return async function(dispatch){
        
        const createdPokemon = await axios.post("http://localhost:3001/pokemons", payload);
        return createdPokemon;

    };
};

export function clearDetailPoke(){
    return {
        type:DETAIL_CLEAR, payload:{}
    }
};

export function filterType(payload){
    return {
        type:FILTER_TYPE_POKE, payload
    }
};

export function filterOrderASDS(payload){
    return {
        type:ORDER_ASC_DESC, payload
    }
};

export function filterOrderAttack(payload){
    return {
        type:ORDER_ATTACK, payload
    }
};

export function filterCreated(payload){
    return {
        type:FILTER_CREATED_POKE, payload
    }
};

