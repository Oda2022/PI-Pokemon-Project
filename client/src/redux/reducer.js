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


const initialState = {
    pokeList:[],
    allpoke:[],
    createPokefilter:[],
    poke:{},
    typeList:[]
};

function rootReducer(state=initialState, action) {
    switch(action.type) {
        case GET_POKE:
            return {
                ...state,
                pokeList: [action.payload],
                allpoke: [action.payload],
                createPokefilter: [action.payload]
            };

        case NAME_POKE:
            return {
                ...state,
                pokeList:[action.payload],
            };
            
        case DETAIL_POKE:
            return {
                ...state,
                poke:action.payload
            }
        
        case TYPE_POKE:
            return {
                ...state,
                typeList:action.payload
            }
            
        case DETAIL_CLEAR:
            return {
                ...state,
                poke:action.payload
            }    


        case FILTER_TYPE_POKE:
            const allPokeType = [...state.createPokefilter];

            if (action.payload === 'defaultype'){
                return {
                    ...state,
                    pokeList: allPokeType,
                }
            }else {
                const pokeTypeFiltered = allPokeType.filter(
                    (poke) => 
                        poke.types[0]?.name === action.payload ||
                        poke.types[1]?.name === action.payload
                )
                return {
                    ...state,
                    pokeList: pokeTypeFiltered
                }
            }

        case ORDER_ASC_DESC:
            const pokeASDS = [...state.pokeList];
            if (action.payload === 'defaultASCDES'){
                pokeASDS.sort((poke1, poke2)=>{
                    if(poke1.id < poke2.id){
                        return -1;
                    }else {
                        return 1;
                    }
                })
            }

            if (action.payload === 'ascending order'){
                pokeASDS.sort((poke1, poke2)=>{
                    if(poke1.name < poke2.name){
                        return -1;
                    }else {
                        return 1;
                    }
                })
            }

            if (action.payload === 'descending order'){
                pokeASDS.sort((poke1, poke2)=>{
                    if(poke1.name < poke2.name){
                        return 1;
                    }else {
                        return -1;
                    }
                })
            }

            return {
                ...state,
                pokeList: pokeASDS
            }

        case ORDER_ATTACK:
            const pokeattack = [...state.pokeList]

            if (action.payload === 'defaultattack'){
                pokeattack.sort((poke1, poke2)=>{
                    if(poke1.id < poke2.id){
                        return -1;
                    }else {
                        return 1;
                    }
                })
            }

            if (action.payload === 'to greater attack'){
                pokeattack.sort((poke1, poke2)=>{
                    if(poke1.attack < poke2.attack){
                        return -1;
                    }else if (poke1.attack > poke2.attack) {
                        return 1;
                    }else {
                        return 0
                    }
                })
            }

            if (action.payload === 'to less attack'){
                pokeattack.sort((poke1, poke2)=>{
                    if(poke1.attack < poke2.attack){
                        return 1;
                    }else if (poke1.attack > poke2.attack) {
                        return -1;
                    }else {
                        return 0
                    }
                })
            }

            return {
                ...state,
                pokeList: pokeattack
            }

        case FILTER_CREATED_POKE: 
            const pokeCreatedFilter = [...state.allpoke]
            if(action.payload === 'existed'){
                
            }


        




        default: 
        return {...state};
    }
};

export default rootReducer;

