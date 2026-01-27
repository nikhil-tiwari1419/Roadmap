import React, { useState } from 'react'
import { Undo2, SquareArrowOutUpRight } from 'lucide-react';
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';


function Home() {
  const roadmapData = [
    {
      title: "Fullstack",
      Link: "/FullStack",
      description: "Frontend,Backend,DataBase,Deployment these are the main piller of  fullstack developemnt",
      url1: "Frontend",
      url2: "Backend",
      url3: "DataBase",
      url4: "Deployment"
    },
    {
      title: "DataSt..&Algorithum",
      Link: "/Dsa",
      description: "DSA helps you write efficient and optimized code. It focuses on organizing data and solving problems logically. Very important for coding interviews and problem-solving skills.",
      url1: "DSA",
    },
    {
      title: "Web3",
      Link: "/Web3",
      description: "Web3 is the decentralized version of the web built on blockchain It includes smart contracts cryptocurrencies and decentralized apps(dApps)Gives users ownership of data and digital assets",
      url1: "Web3",
    },
    {
      title: "DevOps",
      LinkL: "/Devops",
      description: "DevOps connects development and operations teams.It automates building, testing, and deploying applications faster Helps in reliable, scalable, and continuous delivery of software",
      url1: "DevOps",
    },
    {
      title: "AI",
      Link: "/AI",
      description: "AI enables machines to think, learn, and make decisions.It includes machine learning, deep learning, and neural networks.Used in chatbots, recommendations, vision, and automation.",
      url1: "AI",
    },
    {
      title: "Git",
      Link: "/Git",
      description: "⬇️ Git is a version control system used to track code changes.It helps developers work together and roll back mistakes.Works locally on your system.⬇️ GitHub is a cloud platform to store and share Git repositories.It enables collaboration using pull requests, issues, and reviews.Used for teamwork, open source, and project hosting.",
      url1: "Git",
    }
  ]

  const [ActivePOPup, setActivePOPup] = useState(null);
  const direction = useNavigate();
  return (
    <>
      <Navbar />
      <div
        className='bg-color min-h-screen pt-20 px-4  mx-auto max-w-7xl'
      >  <h2 className='text-center font-bold sm:text-2xl '>Home</h2>
        <div
          className="
        grid 
        grid-cols-1 
        sm:grid-cols-2
        lg:grid-cols-3
        gap-4 ">
          {roadmapData.map((item) => (
            <div
              key={item.title}
              className='border-2 border-blue-400 rounded-lg p-6 text-center hover:shadow-md transition'
            >
              <h1 className='text-xl gap-3 flex font-semibold underline mb-2'>{item.title}
              </h1>


              <p className='text-sm font-bold'>{item.description}</p>
              <div className='border border-red-300   rounded underline '>
                <h2
                  onClick={() => setActivePOPup(item.url1)}
                  className='cursor-pointer font-bold p-2 hover:text-blue-500'>{item.url1}</h2>
                <h2
                  onClick={() => setActivePOPup(item.url2)}
                  className='cursor-pointer font-bold p-2 hover:text-blue-500'>{item.url2}</h2>
                <h2
                  onClick={() => setActivePOPup(item.url3)}
                  className='cursor-pointer font-bold p-2 hover:text-blue-500'>{item.url3}</h2>
                <h2
                  onClick={() => setActivePOPup(item.url4)}
                  className='cursor-pointer font-bold p-2 hover:text-blue-500 '>{item.url4}</h2>
                <h2 className='cursor-pointer flex p-2 hover:text-blue-500 '>
                  <SquareArrowOutUpRight
                    onClick={() => direction(item.Link)}
                    className='cursor-pointer '
                  /> Visit
                </h2>
              </div>
            </div>
          ))}
        </div>
        {ActivePOPup && (
          <div className='inset-0 fixed bg-white/40 flex   backdrop-blur-sm items-center justify-center'>
            <div className='bg-color backdrop-blur-lg rounded-lg p-6 w-[90%] max-w-md relative'>
              {/* close btn */}
              <button
                onClick={() => setActivePOPup(null)}
                className='cursor-pointer'>
                <Undo2 />
              </button>
              <h2 className='font-bold border-b-2 text-blue-400 text-lg'> {ActivePOPup}</h2>
              <p className='text-lg text-violet-400 '>
                {/* FullStack */}
                {ActivePOPup === "Frontend" && ("HTML , CSS , JavaScript , React[CSR](Componrnt , rendering , context , children , Effects , Hooks , Jsx , State , props , kyes , Fragements , Event) , ReduxTol , Tailwindcss (UI) , NextJs[SSR](better SEO) , TypeScript(SSR)")}
                {ActivePOPup === "Backend" && " Node.js , Spring-boot , FastAPi , Bun.js , Express, APIs :- (REST  ,  SOAP , gRPC , WebSoket , WebRtc , GraphQL , WebHooks), Authentiction / Authorization :-(jWt , SSO ,Access vs refresh , Bearer , Basic base64)"}
                {ActivePOPup === "DataBase" && (
                  <>
                    <li>Relational(SQL):--[ MySql , PostgreSQL , Oracel , SQL Server , MariaDB , SQlite ]</li>
                    <li>NoSQL:--[ Mongo DB , REdis , CouchDB ,Firebase ] </li>
                  </>
                )}
                {ActivePOPup === "Deployment" && "Docker, CI/CD, Cloud , Vercel , Render , Railway , netlify"}
                {/* DSA */}
                {ActivePOPup === "DSA" && (
                  <>
                    <li>Time & Space Complexity</li>
                    <li>Arrays</li>
                    <li>Strings</li>
                    <li>Recursion</li>
                    <li>Linked List</li>
                    <li>Stack</li>
                    <li>Queue</li>
                    <li>Trees</li>
                    <li>Binary Search Tree</li>
                    <li>Heap</li>
                    <li>Graphs</li>
                    <li>Hashing</li>
                    <li>Sorting</li>
                    <li>Searching</li>
                    <li>Greedy Algorithms</li>
                    <li>Dynamic Programming</li>
                    <li>Backtracking</li>
                  </>
                )}

                {/* WEB3 */}
                {ActivePOPup === "Web3" && (
                  <>
                    <li>Blockchain Basics</li>
                    <li>Ethereum</li>
                    <li>Smart Contracts</li>
                    <li>Solidity</li>
                    <li>Web3.js</li>
                    <li>Ethers.js</li>
                    <li>Wallets (MetaMask)</li>
                    <li>Gas Fees</li>
                    <li>Tokens (ERC20, ERC721, ERC1155)</li>
                    <li>DeFi</li>
                    <li>NFTs</li>
                    <li>DAOs</li>
                  </>
                )}

                {/* DEVOPS */}
                {ActivePOPup === "DevOps" && (
                  <>
                    <li>Linux Basics</li>
                    <li>Git & GitHub</li>
                    <li>Docker</li>
                    <li>CI/CD Pipeline</li>
                    <li>Kubernetes</li>
                    <li>Helm</li>
                    <li>AWS/GCP/Azure</li>
                    <li>Nginx</li>
                    <li> Monitoring (Prometheus, Grafana)</li>
                    <li>Logging</li>
                    <li>Infrastructure as Code (Terraform)</li>
                  </>
                )}

                {/* AI */}
                {ActivePOPup === "AI" && (
                  <>
                    <li>Python</li>
                    <li>Math for AI</li>
                    <li> Machine Learning</li>
                    <li>Deep Learning</li>
                    <li>Neural Networks</li>
                    <li>NLP</li>
                    <li> Computer Vision</li>
                    <li>Transformers</li>
                    <li>LLMs</li>
                    <li>Prompt Engineering</li>
                    <li>AI Tools & APIs</li>
                  </>

                )}
                {/* Git hub */}
                {ActivePOPup === "Git" && (
                  <>
                    <li>Basic</li>
                    <li>Fundamental command </li>
                    <li>working with branches</li>
                    <li>Remote Repositories</li>
                    <li>Undoing Changes</li>
                    <li>Advanced Git Concept</li>
                    <li>Collaboration workflow</li>
                    <li>Git Internals</li>
                    <li>Git Best Practices</li>
                    <li>GUI Tools and git Hosting</li>
                    <li>Register for National Skillup</li>
                  </>
                )}
              </p>
            </div>
          </div>
        )}
        <Footer/>
      </div>

    </>
  )
}

export default Home;
