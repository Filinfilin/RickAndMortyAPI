import React, { useState, useEffect } from "react"
import axios from 'axios'
import Cards from './Cards'
import SearchBox from "./SearchBox"
import st from './DataFetching.module.css'

function DataFetching() {

    const [posts, setPosts]= useState([])
    const [search, filterText] = useState('')

    useEffect(() => {
        axios.get('/getAPI')
        .then(res => {
        setPosts(res.data.character)
        })})
     
    const listOfCards = posts
        .filter(name=>name.episode.toString().toLowerCase().includes(search.toLowerCase()))
        .map(filteredname=>{    
            return <div className={st.DataFetching}>    
                            
                    <Cards  
                        key={filteredname.id} 
                        name = {filteredname.name} 
                        status={filteredname.status} 
                        src={filteredname.image}
                        species = {filteredname.species}                       
                    />
                </div>
    })
    
        return (
            
            <div className={st.Main}>
                <SearchBox filterText = {filterText}/>
                <h2>Вот что удалось найти: </h2>
                <div className={st.CardConteiner}>
                {listOfCards}
                </div>
            </div>
    )
}

export default DataFetching;
