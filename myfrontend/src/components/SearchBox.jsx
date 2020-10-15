import React from 'react'
import st from './SearchBox.module.css'
 

const SearchBox = (props) => {
    const filterText = props.filterText

    return (
        <div className={st.SearchBox}>
            <div className={st.Logo}>
                <h1>РИК И МОРТИ</h1>
                <h4>База героев</h4>
            </div>
            <input type='text' placeholder='Search' onChange={e => filterText(e.target.value)} /> 
        </div>
    )
}

export default SearchBox
