import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  // the data we get from useFetch is an array of array of the data
  const { loading, data } = useFetch()
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  const handlePage = (index) => {
    setPage(index)
  }

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
  }

  // console.log(loading, data)
  useEffect(() => {
    if (loading) return //this line means if we are loading do nothing when we are done then do this
    // here we set followers to display one of the arrays in the array now called data
    // page is the page number

    setFollowers(data[page])
    // the page will re-render whenever loading value changes
  }, [loading, page])
  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'Loading...' : 'Pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {followers.map((follower) => {
            // we pass in each follower data to Follower comp, where we will handle how they are displayed
            return <Follower key={follower.id} {...follower} />
          })}
        </div>
        {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  // this checks if the index is the same as the active page, then sets the btn to active
                  // else do do nothing
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className='next-btn' onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
