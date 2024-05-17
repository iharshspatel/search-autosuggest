import React from 'react'
import Product from './Product'

const SearchResults = ({searchResultProducts}) => {
  return (
    <div className='searchResultsGrid'>{
        searchResultProducts.map((p)=><Product key={p.name} product={p} />)
    }
    </div>
  )
}

export default SearchResults