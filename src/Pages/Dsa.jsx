import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Dsa() {
  const ListOfTopics = [
    { 
      topic: "Loops and Pattern Printing :-",
      
     },
    { topic: "Arrays / 2D Array :-" },
    { topic: "Strings" },
    { topic: "Pointers :-" },
    { topic: "Time and Space Complexity :-" },
    { topic: "Sorting and searching" },
    { topic: "Recursion Backtracking" },
    { topic: "Linked List" },
    { topic: "Stack , Queue , deque" },
    { topic: "Sets and Maps" },
    { topic: "Trees" },
    { topic: "Binary Search Tree" },
    { topic: "Heap" },
    { topic: "Graphs" },
    { topic: "Hashing" },
    { topic: "Pirority queue / Heap" },
    { topic: "Greedy Algorithms" },
    { topic: "Dynamic Programming" },
    { topic: "introduction to c++", }
  ]
  return (
    <>
      <Navbar />
      <div className='bg min-h-screen mx-auto px-4 pt-20 max-w-7xl '>
        <h1 className='text-center font-bold text-2xl mb-6'>Data Structure & Algorithum</h1>
        <div className=' '>
          {ListOfTopics.map((item,index) => (
            <div
              className='border p-2 m-3 rounded-2xl '
              key={index}>
              {item.topic}
              <p>{item.topic.l}</p>
              
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Dsa