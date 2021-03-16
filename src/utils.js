const paginate = (followers) => {
  //   console.log(followers)
  const itemsPerPage = 12
  const pages = Math.ceil(followers.length / itemsPerPage)

  //   creating arrays of arrays
  const followersArray = Array.from({ length: pages }, (_, index) => {
    //   this gives us a new starting point when we are iterating over our array
    const start = index * itemsPerPage
    // console.log(start)
    return followers.slice(start, start + itemsPerPage)
  })
  //   console.log(followersArray)
  return followersArray
}

export default paginate

//  let index = 0
//   const chunk_size = 10
//   const arrayLength = followers.length
//   const tempArray = []
//   for (index = 0; index < arrayLength; index += chunk_size) {
//     let myChunk = followers.slice(index, index + chunk_size)
//     // Do something if you want with the group
//     tempArray.push(myChunk)
//   }
//   console.log(tempArray)
//   //   return tempArray
