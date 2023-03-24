import {useState,useEffect} from 'react';

let globalState={};
let listeners=[];
let actions={};

export const useStore=()=>{
const setstate=useState(globalState);
const dispatch=(actionidentifier,payload)=>{
    const newstate=actions[actionidentifier](globalState,payload);/* its a product key that we use in productstore as productId */
    globalState={...globalState,...newstate};/* merging newstate with globalstate */

    for (const listerner of listeners){
listerner(globalState)
    }
}

useEffect(()=>{
    listeners.push(setstate);
    return ()=>{
        listeners=listeners.filter(li=>li!==setstate);
    }
},[setstate])

return [globalState,dispatch];
};

export  const initialStore=(useractions,initialstate)=>{
    if(initialstate){
        globalState={...globalState,...initialstate};
    }
    actions={...actions,...useractions};
}