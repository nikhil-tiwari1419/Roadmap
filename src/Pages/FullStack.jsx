import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import QnA from '../assets/QnA'
import { useTheme } from '../Context/Theme'

function FullStack() {
  const { theme } = useTheme();
  const Topic = [
    {
      topic: "HTML / CSS",
      links: [
        { label: "MDN HTMl docs", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" }

      ]
    },
    {
      topic: "JS Basic",
      links: [
        {
          label: "JavaScript info",
          url: "https://javascript.info/first-steps"

        }
      ]
    },
    {
      topic: "JS architecture",
      links: [
        {
          label: "JavaScript Architecture – Architecture For Different Applications",
          url: "https://data-flair.training/blogs/javascript-architecture/"
        }
      ]
    },
    {
      topic: "Async JS",
      links: [
        {
          label: "MDN Async docs",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"
        }
      ]
    },
    {
      topic: "Node Vs Browser Js",
      links: [
        {
          label: "Node.js docs",
          url: "https://nodejs.org/en/learn/getting-started/differences-between-nodejs-and-the-browser"
        }
      ]
    },
    {
      topic: "HTTP and Express",
      links: [
        {
          label: "Express docs",
          url: "https://expressjs.com/en/guide/routing.html"
        }
      ]
    }, {
      topic: "Complet Backend for biggner",
      links: [{
        label: "Node Js + Express + Db + Rest API ",
        url: "https://youtu.be/0IciwnJ6PJI?si=Y9DAurp6KLkJ4lG5",
      },
      {
        label: "Authentication Tyoes nd techniques",
        url: "https://medium.com/@alyragab70/authentication-types-and-techniques-eb8232eebcfb",
      }, {
        label: "REST API Mastery →From Basics to Production",
        url: "https://medium.com/@decodinggtech/rest-api-mastery-from-basics-to-production-4510fbf247fd",
      }
      ]
    },
    {
      topic: "DataBase And MongoDB",
      links:
        [
          {
            label: "MongoDB Bro code",
            url: "https://youtu.be/c2M-rlkkT5o?si=zipB8Sia-Kr-P2rs",
          },
          {
            label: "MongoDB Code with Harry",
            url: "https://youtu.be/M1dKYQ7GsTg?si=kp0hWH9jynXGa9KL",
          }, {
            label: "MySQL playlist (Traived Official) ",
            url: "https://youtube.com/playlist?list=PL-pnFFAm42szbYLIAB3pc4Dnmfc9EHhR5&si=7z7dd-Ocit-ejzn5",
          },
        ]
    },
    {
      topic: "Postgres + prisama / drizzle",
      links: [
        {
          label: "Prisma ORM (Thapa technical)",
          url: "https://youtu.be/-_nz4q_Cyr4?si=QYVu2k8RpceA2-o0",
        }, {
          label: "Prisama and MongoDB (Hitesh Choudhary)",
          url: "https://www.youtube.com/live/IiqhMNPWGEs?si=HcOEhXKTitY-RouY",
        }, {
          label: "PostgresSQL (Mprashnat TECH)",
          url: "https://youtu.be/cnzka7kF5Zk?si=pgKLi2PaVLyPb_u3"
        }
      ]
    },
    {
      topic: "TypeScript",
      links: [
        {
          label: "Typesc.. playlist (Code step by step)",
          url: "https://youtube.com/playlist?list=PL8p2I9GklV44fWXJGEsBvR_ylJClgdVAN&si=UzemQ3LfwNT6aFHw",


        }, {
          label: "Code step by step 6hr course",
          url: "https://youtu.be/oTam-6tHew4?si=AJEpGltQe63G9KH2",
        }, {
          label: "React & TyepScript + project (RodeSideCoder) ",
          url: "https://youtu.be/knqz3_rPcKk?si=aptQMJfSy1Pcridv"
        }
      ]
    },
    {
      topic: "React Js + tailwind css + ReduxTol ",
      links: [
        {
          label: "React Js comple course + tailwind (Sheryians Coding School)",
          url: "https://youtu.be/3LRZRSIh_KE?si=6N3KH64ZiJm5Xtir",
        }, {

          label: "ReduxTool kit ",
          url: "https://youtu.be/Q5TqsetwCoE?si=0_rHF88TjW_8msXx",
        }, {
          label: "Tailwind Css Complet responsivenes website",
          url: "https://youtu.be/J_r6hBo9lO4?si=flmu6cdl9ag7Qfy2",
        }
      ]
    },
    {
      topic: "Next Js",
      links: [
        {
          label: " Next.js tuturial (Sheryians Coding School)",
          url: "https://www.youtube.com/live/12NDVrqybWc?si=Wb6fx9pcHUAeET6K"
        }
      ]
    },
    {
      topic: "WebSocket + WebRTC",
      links: [
        {
          label: "Hussein Nasser WebRTC ",
          url: "https://youtu.be/FExZvpVvYxA?si=I_BBOtO6WVhx8KkR",
        },
        {
          label: "Hussein Nasser WebSocket ",
          url: "https://youtube.com/playlist?list=PLQnljOFTspQUGjfGdg8UvL3D_K9ACL6Qh&si=Ve1NHLwsQYgcynrh",
        }
      ]
    },
    {
      topic: "Automation [ N8N ]",
      links: [
        {
          label: "n8n tutorial (Sheriyans codeing school)",
          url: "https://youtu.be/vkI8BdsLcXg?si=rF7D-Uuj6z2N0vGc",
        }
      ]
    }


  ]
  return (
    <>
      <Navbar />
      <div
        className={`'grid-bg min-h-screen pb-3 pt-20 px-4 ${theme === 'dark' ? "bg-gray-900 text-white" : "grid-bg text-black"}`}
      >
        <h2 className="text-center font-bold text-2xl mb-3">FullStack</h2>
        <h1 className='underline underline-offset-4 text-sm  text-center'> <span className='text-2xl text-red-600 '>*</span>
          Note: If u wnat to become a good developer , Start reading documentation's and understand the concept
        </h1>
        <div className='border-blue-400 border-2 mx-auto max-w-7xl rounded text-center font-bold  sm:text-2xl text-lg  grid grid-cols-1 md:grid-cols-2'>
          {Topic.map((item) => (
            <div
              key={item.topic}
              className='border-2 py-5 border-dashed border-gray-400 rounded items-center m-3 px-2 sm:mx-13 text-lg sm:text-2xl'>
              <h1 className='flex'>{item.topic}  </h1>

              <ul className='pl-6 mt-2 text-base sm:text-lg'>
                {item.links.map((link, index) => (
                  <li key={index}>
                    {/* <Youtube /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                    <a href={link.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:underline flex '>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* QnA */}
        <h1 className='font-bold text-xl text-center pt-3'>QnA section</h1>
        <div
          className='border-t-blue-300 border-t-3 border-l-blue-300 border-l-3 border-b-green-300 border-b-3 border-r-green-300  border-r-3  p-2 h-90 rounded mx-auto max-w-7xl  overflow-auto no-scrollbar'
        >

          <QnA />
        </div>

        <p className='px-1 rounded mt-10 text-xl text-center'>
          <strong>👏“In the beginning, practice more and depend less on AI.
            Build logic with your own hands.
            Once you understand the <span className='underline underline-offset-4 text-red-400'> ‘why’</span>, use AI to speed up the <span className='text-red-400 underline underline-offset-4'>‘how’</span>.”</strong>
        </p>

        <Footer />
      </div>
    </>
  )
}

export default FullStack

