import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Dsa() {
  const ListOfTopics = [
    {
      topic: "Introduction to C++",
      subTopics: [
        "Basic syntax",
        "Input / Output",
        "STL basics",
        "Vectors, maps, sets"
      ],
      resource: [
        { pdf: "" },
        { video: "" },
        { practic: "" },
      ]
    },
    {
      topic: "Loops and Pattern Printing",
      subTopics: [
        "for, while, do-while loops",
        "Nested loops",
        "Pattern logic (stars, numbers)",
        "Dry run practice"
      ],
      resource: [
        { pdf: "" },
        { video: "" },
        { practic: "" },
      ]
    },
    {
      topic: "Arrays / 2D Array",
      subTopics: [
        "Array basics",
        "Traversal & insertion",
        "Prefix sum",
        "Kadane’s Algorithm",
        "2D array traversal",
        "Matrix problems"
      ],
      resource: [
        { pdf: "" },
        { video: "" },
        { practic: "" },
      ]
    },
    {
      topic: "Strings",
      subTopics: [
        "String basics",
        "Palindrome check",
        "Frequency counting",
        "Substring problems",
        "String manipulation"
      ],
      resource: [
        { pdf: "" },
        { video: "" },
        { practic: "" },
      ]
    },
    {
      topic: "Pointers",
      subTopics: [
        "Pointer basics",
        "Pointer arithmetic",
        "Pointers with arrays",
        "Pointers with functions"
      ],
      resource: [
        { pdf: "" },
        { video: "" },
        { practic: "" },
      ]
    },
    {
      topic: "Time and Space Complexity",
      subTopics: [
        "Big-O notation",
        "Best, average, worst case",
        "Time vs space tradeoff",
        "Analyzing loops & recursion"
      ],
      resource: [
        { pdf: "" },
        { video: "" },
        { practic: "" },
      ]
    },
    {
      topic: "Sorting and Searching",
      subTopics: [
        "Bubble, Selection, Insertion sort",
        "Merge sort",
        "Quick sort",
        "Linear search",
        "Binary search"
      ],
      resource: [
        { pdf: "" },
        { video: "" },
        { practic: "" },
      ]
    },
    {
      topic: "Recursion & Backtracking",
      subTopics: [
        "Recursion basics",
        "Base condition",
        "Recursive tree",
        "Backtracking concept",
        "N-Queen, Subsets problems"
      ],
      resource: [
        { pdf: "" },
        { video: "" },
        { practic: "" },
      ]
    },
    {
      topic: "Linked List",
      subTopics: [
        "Singly linked list",
        "Doubly linked list",
        "Insertion & deletion",
        "Reverse linked list",
        "Cycle detection"
      ],
      resource: [
        { pdf: "" },
        { video: "" },
        { practic: "" },
      ]
    },
    {
      topic: "Stack, Queue & Deque",
      subTopics: [
        "Stack operations",
        "Queue operations",
        "Deque",
        "Applications of stack & queue"
      ],
      resource: [
        { pdf: "" },
        { video: "" },
        { practic: "" },
      ]
    },
    {
      topic: "Sets and Maps",
      subTopics: [
        "Set basics",
        "Map basics",
        "Frequency counting",
        "Ordered vs unordered maps"
      ],
      resource: [
        { pdf: "" },
        { video: "" },
        { practic: "" },
      ]
    },
    {
      topic: "Trees",
      subTopics: [
        "Tree terminology",
        "Binary tree",
        "Tree traversals (Inorder, Preorder, Postorder)",
        "Height & depth"
      ],
      resource: [
        { pdf: "" },
        { video: "" },
        { practic: "" },
      ]
    },
    {
      topic: "Binary Search Tree",
      subTopics: [
        "BST properties",
        "Insertion & deletion",
        "Searching in BST",
        "BST validation"
      ],
      resource: [
        { pdf: "" },
        { video: "" },
        { practic: "" },
      ]
    },
    {
      topic: "Heap",
      subTopics: [
        "Min heap",
        "Max heap",
        "Heapify",
        "Heap sort"
      ],
      resource: [
        { pdf: "" },
        { video: "" },
        { practic: "" },
      ]
    },
    {
      topic: "Graphs",
      subTopics: [
        "Graph representation",
        "BFS & DFS",
        "Cycle detection",
        "Shortest path algorithms"
      ],
      resource: [
        { pdf: "" },
        { video: "" },
        { practic: "" },
      ]
    },
    {
      topic: "Hashing",
      subTopics: [
        "Hash functions",
        "Collision handling",
        "Hash maps",
        "Applications of hashing"
      ],
      resource: [
        { pdf: "" },
        { video: "" },
        { practic: "" },
      ]
    },
    {
      topic: "Priority Queue",
      subTopics: [
        "Priority queue basics",
        "Implementation using heap",
        "Use cases"
      ],
      resource: [
        { pdf: "" },
        { video: "" },
        { practic: "" },
      ]
    },
    {
      topic: "Greedy Algorithms",
      subTopics: [
        "Greedy strategy",
        "Activity selection",
        "Fractional knapsack",
        "Interval problems"
      ],
      resource: [
        { pdf: "" },
        { video: "" },
        { practic: "" },
      ]
    },
    {
      topic: "Dynamic Programming",
      subTopics: [
        "Overlapping subproblems",
        "Memoization",
        "Tabulation",
        "Classic DP problems"
      ],
      resource: [
        { pdf: "" },
        { video: "" },
        { practic: "" },
      ]
    },
    
  ];

  return (
    <>
      <Navbar />
      <div className='bg min-h-screen mx-auto px-4 pt-20 max-w-7xl pb-3'>
        <h1 className='text-center font-bold text-2xl mb-6'>Data Structure & Algorithum</h1>
        <div className=' '>
          {ListOfTopics.map((item, index) => (
            <div
              key={index}
              className='border p-2 m-3 rounded-2xl '
            >
              <h2 className='font-semibold text-lg mb-2'>
                {index + 1}.{item.topic}
              </h2>

              <ul className='list-disc pl-5 mb-6'>
                {item.subTopics.map((sub, subIndex) => (
                  <li key={subIndex} className='mb-1'>
                    {sub}
                  </li>
                ))}
              </ul>
              {/* resources */}

              <div className='flex gap-3 '>
                <button
                  className='px-3  cursor-pointer  py-1 border border-none font-semibold rounded-lg hover:text-amber-400'
                >
                  PDF
                </button>
                <button
                  className='px-3 cursor-pointer  py-1 border border-none font-semibold rounded-lg hover:text-amber-400'
                >
                  Video
                </button>
                <button
                  className='px-3  cursor-pointer py-1 border border-none font-semibold rounded-lg hover:text-amber-400'
                >
                  Practice
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='font-mono px-10 my-5 sm:text-2xl text-lg'>
<p>“DSA is not about memorizing solutions.
It’s about training your brain to think better.”</p>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Dsa