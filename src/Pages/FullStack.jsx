import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Youtube } from 'lucide-react';

function FullStack() {
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
          }
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
          label: "MySQL playlist (Traived Official) ",
          url: "https://youtube.com/playlist?list=PL-pnFFAm42szbYLIAB3pc4Dnmfc9EHhR5&si=7z7dd-Ocit-ejzn5",
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
    }


  ]
  return (
    <>
      <Navbar />
      <div
        className='bg-color min-h-screen mx-auto max-w-7xl pt-20 px-4 '
      >
        <div className='border-blue-300 border-2 sm:mx-20 rounded text-center font-bold sm:text-2xl text-lg '>
          <h2>FullStack</h2>
          {Topic.map((item) => (
            <div
              key={item.topic}
              className='border border-violet-400 rounded items-center m-3 px-2 sm:mx-13 text-lg sm:text-2xl'>
              <h1 className='hover:text-indigo-400 flex'>{item.topic}  </h1>

              <ul className='pl-6 mt-2 text-base sm:text-lg'>
                {item.links.map((link, index) => (
                  <li key={index}>
                    <Youtube strokeWidth={1.25} />
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
        <Footer />
      </div>
    </>
  )
}

export default FullStack

