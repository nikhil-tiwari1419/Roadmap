import React, { useState } from 'react'
import { Undo2, SquareArrowOutUpRight } from 'lucide-react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const [activePopup, setActivePopup] = useState(null)

  const roadmapData = [
    {
      title: "Fullstack",
      link: "/FullStack",
      description:
        "Frontend, Backend, Database, Deployment are the main pillars of Fullstack development",
      sections: ["Frontend", "Backend", "DataBase", "Deployment"],
    },
    {
      title: "Data Structures & Algorithms",
      link: "/Dsa",
      description:
        "DSA helps you write optimized code and is essential for interviews.",
      sections: ["DSA"],
    },
    {
      title: "Web3",
      link: "/Web3",
      description:
        "Decentralized web using blockchain, smart contracts, and dApps.",
      sections: ["Web3"],
    },
    {
      title: "DevOps",
      link: "/Devops",
      description:
        "Automates build, test, deploy with CI/CD and cloud infrastructure.",
      sections: ["DevOps"],
    },
    {
      title: "AI",
      link: "/AI",
      description:
        "AI enables machines to learn, reason, and automate tasks.",
      sections: ["AI"],
    },
    {
      title: "Git",
      link: "/Git",
      description:
        "Git for version control and GitHub for collaboration.",
      sections: ["Git"],
    },
  ]

  return (
    <>
      <Navbar />

      <div className="bg min-h-screen pb-3 pt-20 px-4 mx-auto max-w-7xl">
        <h2 className="text-center font-bold text-2xl mb-6">Home</h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {roadmapData.map((item) => (
            <div
              key={item.title}
              className="border-2 border-blue-400 rounded-lg p-6 hover:shadow-md transition"
            >
              <h1 className="text-xl font-semibold underline mb-2">
                {item.title}
              </h1>

              <p className="text-sm font-bold mb-3">
                {item.description}
              </p>

              <div className="border rounded">
                {item.sections.map((sec) => (
                  <h2
                    key={sec}
                    onClick={() => setActivePopup(sec)}
                    className="cursor-pointer font-bold p-2 hover:text-blue-500"
                  >
                    {sec}
                  </h2>
                ))}

                <div
                  onClick={() => navigate(item.link)}
                  className="cursor-pointer flex items-center gap-2 p-2 hover:text-blue-500"
                >
                  <SquareArrowOutUpRight size={18} />
                  Visit
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* POPUP */}
        {activePopup && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"

          >
            <div className="font-bold text-xl  rounded-lg p-6 w-[90%] max-w-md relative">
              <button
                onClick={() => setActivePopup(null)}
                className="absolute cursor-pointer top-3 right-3"
              >
                <Undo2 />
              </button>

              <h2 className="font-bold border-b text-blue-500 text-lg mb-3">
                {activePopup}
              </h2>

              <ul className="list-disc pl-5 space-y-1 text-sm">
                {activePopup === "Frontend" && (
                  <>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Core Web</strong>
                        <ul className="list-circle pl-5 mt-1">
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>JavaScript</li>
                        </ul>
                      </li>

                      <li>
                        <strong>React (CSR – Client Side Rendering)</strong>
                        <ul className="list-circle pl-5 mt-1">
                          <li>Components</li>
                          <li>Rendering</li>
                          <li>Context API</li>
                          <li>Children</li>
                          <li>Effects</li>
                          <li>Hooks (useState,UseEffect,useRef,useContext,useMemo,useCallbac,useReducer ) </li>
                          <li>JSX</li>
                          <li>State</li>
                          <li>Props</li>
                          <li>Keys</li>
                          <li>Fragments</li>
                          <li>Events</li>
                        </ul>
                      </li>

                      <li>
                        <strong>State Management</strong>
                        <ul className="list-circle pl-5 mt-1">
                          <li>Redux Toolkit</li>
                        </ul>
                      </li>

                      <li>
                        <strong>Styling / UI</strong>
                        <ul className="list-circle pl-5 mt-1">
                          <li>Tailwind CSS</li>
                        </ul>
                      </li>

                      <li>
                        <strong>Frameworks</strong>
                        <ul className="list-circle pl-5 mt-1">
                          <li>Next.js (SSR – Better SEO)</li>
                          <li>TypeScript (with React / Next.js)</li>
                        </ul>
                      </li>
                    </ul>

                  </>
                )}

                {activePopup === "Backend" && (
                  <>
                    <li>
                      <strong>Backend Runtimes & Frameworks</strong>
                      <ul className="list-circle pl-5 mt-1">
                        <li>Node.js</li>
                        <li>Spring Boot</li>
                        <li>FastAPI</li>
                        <li>Bun.js</li>
                        <li>Express.js</li>
                      </ul>
                    </li>

                    <li>
                      <strong>APIs & Communication</strong>
                      <ul className="list-circle pl-5 mt-1">
                        <li>REST</li>
                        <li>SOAP</li>
                        <li>gRPC</li>
                        <li>WebSocket</li>
                        <li>WebRTC</li>
                        <li>GraphQL</li>
                        <li>WebHooks</li>
                      </ul>
                    </li>

                    <li>
                      <strong>Authentication & Authorization</strong>
                      <ul className="list-circle pl-5 mt-1">
                        <li>JWT (JSON Web Token)</li>
                        <li>SSO (Single Sign-On)</li>
                        <li>Access Token vs Refresh Token</li>
                        <li>Bearer Token</li>
                        <li>Basic Authentication (Base64)</li>
                      </ul>
                    </li>
                  </>
                )}

                {activePopup === "DataBase" && (
                  <>
                    <li>Relational(SQL):--[ MySql , PostgreSQL , Oracel , SQL Server , MariaDB , SQlite ]</li> <li>NoSQL:--[ Mongo DB , REdis , CouchDB ,Firebase ] </li>
                  </>
                )}

                {activePopup === "Deployment" && (
                  <>
                    <li>Docker</li>
                    <li>CI/CD</li>
                    <li>Vercel, Render, Netlify</li>
                  </>
                )}

                {activePopup === "DSA" && (
                  <>
                    <li>introduction to c++</li>
                    <li>Loops and Pattern Printing </li>
                    <li>Arrays / 2D Array</li>
                    <li>Strings</li>
                    <li>Pointers </li>
                    <li>Time and Space Complexity</li>
                    <li>Sorting and searching</li>
                    <li>Recursion Backtracking</li>
                    <li>Linked List</li>
                    <li>Stack , Queue , deque</li>
                    <li>Sets and Maps</li>
                    <li>Two pointer</li>
                    <li>Trees</li>
                    <li>Binary Search Tree</li>
                    <li>Heap</li>
                    <li>Graphs</li>
                    <li>Hashing</li>
                    <li>Pirority queue / Heap</li>
                    <li>Greedy Algorithms</li>
                    <li>Dynamic Programming</li>
                  </>
                )}

                {activePopup === "Web3" && (
                  <>
                    <li>Blockchain Basics</li> <li>Ethereum</li> <li>Smart Contracts</li> <li>Solidity</li> <li>Web3.js</li> <li>Ethers.js</li> <li>Wallets (MetaMask)</li> <li>Gas Fees</li> <li>Tokens (ERC20, ERC721, ERC1155)</li> <li>DeFi</li> <li>NFTs</li> <li>DAOs</li>
                  </>
                )}

                {activePopup === "DevOps" && (
                  <>
                    <li>Linux Basics</li> <li>Git & GitHub</li> <li>Docker</li> <li>CI/CD Pipeline</li> <li>Kubernetes</li> <li>Helm</li> <li>AWS/GCP/Azure</li> <li>Nginx</li> <li> Monitoring (Prometheus, Grafana)</li> <li>Logging</li> <li>Infrastructure as Code (Terraform)</li>
                  </>
                )}

                {activePopup === "AI" && (
                  <>
                    <li>Python</li> <li>Math for AI</li> <li> Machine Learning</li> <li>Deep Learning</li> <li>Neural Networks</li> <li>NLP</li> <li> Computer Vision</li> <li>Transformers</li> <li>LLMs</li> <li>Prompt Engineering</li> <li>AI Tools & APIs</li>
                  </>
                )}

                {activePopup === "Git" && (
                  <>
                    <li>Basic</li> <li>Fundamental command </li> <li>working with branches</li> <li>Remote Repositories</li> <li>Undoing Changes</li> <li>Advanced Git Concept</li> <li>Collaboration workflow</li> <li>Git Internals</li> <li>Git Best Practices</li> <li>GUI Tools and git Hosting</li> <li>Register for National Skillup</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  )
}

export default Home
