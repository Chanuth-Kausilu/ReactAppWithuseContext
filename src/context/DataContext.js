import { createContext,useState,useEffect } from "react";
import React from 'react';
import { useNavigate } from 'react-router-dom';


import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [posts,setPosts] = useState([])
    const [search,setSearch] = useState('')
    const [searchResults,setSearchResults] = useState([]);
    const navigate = useNavigate();
    

    const {data,fetchError,isLoading} = useAxiosFetch('http://localhost:3500/posts');
    useEffect(()=>{
        setPosts(data);
      },[data])
    
      useEffect(()=>{
        const filteredResults = posts.filter(post => 
          ((post.body.toLocaleLowerCase()).includes(search.toLowerCase()))
          || ((post.title.toLocaleLowerCase()).includes(search.toLowerCase())));
          setSearchResults(filteredResults.reverse());
      },[posts,search])


      
    return (
        <DataContext.Provider value ={{
            search, setSearch,
            searchResults,fetchError,isLoading,setPosts,
            posts,navigate
        }}>{children}</DataContext.Provider>
    )
}

export default DataContext;