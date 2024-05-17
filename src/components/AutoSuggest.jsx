import React from 'react'
import Product from './Product'

export const AutoSuggest = ({autoSuggestProducts}) => {
  return (
    <div className='autoSuggestContainer'>{
        autoSuggestProducts.map((p)=><Product key={p.name} product={p}/>)
    }
    </div>
  )
}
