import React from 'react'
import WordData from '../WordData'

const Alphabetall = () => {
    const aaaj = ["ბ", "ა"]
  const filteralph=WordData.map(item=>item.geo).sort()
 console.log(filteralph)


 const film = filteralph.findIndex(item=> item== "ბ")
 console.log(film)
 return (
    <div></div>
  )
}

export default Alphabetall