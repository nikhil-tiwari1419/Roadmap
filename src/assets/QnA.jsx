import { useState } from 'react'
import { FolderClosed, FolderOpen } from 'lucide-react';

function QnA() {
    const [openIndex, setOpenIndex] = useState(null);
    const handdeltoggle = (index) => {
        if (openIndex === index) {
            setOpenIndex(null)
        } else {
            setOpenIndex(index);
        }
    };
  const qnaList = [
  {
    question: "Is this a complete full-stack JavaScript roadmap?",
    answer:
      "Yes. This roadmap is designed to take you from web fundamentals to advanced full-stack concepts. It covers frontend development, backend APIs, databases, real-time communication, modern tooling, and scalable architecture used in real-world applications."
  },
  {
    question: "Who is this roadmap best suited for?",
    answer:
      "This roadmap is ideal for beginners, college students, self-taught developers, and working professionals who want to build production-ready JavaScript applications and prepare for industry roles."
  },
  {
    question: "Why does the roadmap start with HTML, CSS, and JavaScript basics?",
    answer:
      "HTML, CSS, and JavaScript are the foundation of the web. A strong grasp of these ensures you understand how browsers work, how layouts are built, and how JavaScript interacts with the DOM before moving to frameworks."
  },
  {
    question: "What does JavaScript architecture mean in this roadmap?",
    answer:
      "JavaScript architecture focuses on writing clean, modular, and scalable code. This includes folder structure, separation of concerns, reusable components, and designing applications that are easy to maintain and extend."
  },
  {
    question: "Why is Async JavaScript a dedicated topic?",
    answer:
      "Modern applications rely heavily on asynchronous operations such as API calls, database queries, file handling, and real-time updates. Understanding promises, async/await, and event loops is critical for writing efficient JavaScript."
  },
  {
    question: "What is the importance of understanding Node.js vs Browser JavaScript?",
    answer:
      "Node.js and browsers provide different APIs and runtime environments. Understanding these differences helps you write correct server-side code and avoid common runtime errors."
  },
  {
    question: "How do HTTP and Express fit into backend development?",
    answer:
      "HTTP defines the communication between client and server, while Express simplifies backend development by providing routing, middleware, request handling, authentication, and API structure."
  },
  {
    question: "Why are both MongoDB and PostgreSQL included in this roadmap?",
    answer:
      "MongoDB is useful for flexible, schema-less data models, while PostgreSQL excels at structured, relational data. Learning both helps you choose the right database based on application requirements."
  },
  {
    question: "What problem do Prisma or Drizzle solve?",
    answer:
      "Prisma and Drizzle are ORMs that provide type-safe database queries, reduce SQL errors, and improve developer productivity by making database access easier and more reliable."
  },
  {
    question: "Why should I learn TypeScript after JavaScript?",
    answer:
      "TypeScript adds static typing, which helps catch bugs at compile time, improves code readability, and scales better for large codebases used in professional environments."
  },
  {
    question: "What is the role of Turborepo in modern development?",
    answer:
      "Turborepo helps manage monorepos efficiently by optimizing builds, caching tasks, and improving performance when working with large multi-package projects."
  },
  {
    question: "Why is BunJS included in this roadmap?",
    answer:
      "BunJS is a modern JavaScript runtime that focuses on speed and developer experience. It offers faster installs, bundling, and execution compared to traditional tools."
  },
  {
    question: "Why is React still relevant in 2025?",
    answer:
      "React remains highly relevant due to its strong ecosystem, community support, and ability to build scalable, component-based user interfaces for modern applications."
  },
  {
    question: "Why choose Tailwind CSS over traditional CSS or other frameworks?",
    answer:
      "Tailwind CSS enables rapid UI development using utility classes, reduces context switching, and helps maintain design consistency across large applications."
  },
  {
    question: "What makes Next.js important for production applications?",
    answer:
      "Next.js enhances React with server-side rendering, file-based routing, performance optimizations, and SEO-friendly features required for production-grade applications."
  },
  {
    question: "Why are WebSockets and WebRTC necessary?",
    answer:
      "WebSockets enable real-time, two-way communication for features like chat and live updates, while WebRTC allows peer-to-peer audio, video, and data streaming."
  },
  {
    question: "What are Queues and Pub/Sub systems used for in real projects?",
    answer:
      "Queues and Pub/Sub systems are used for background jobs, event-driven systems, notifications, email processing, and building scalable microservice architectures."
  },
  {
    question: "Does this roadmap help in building real-world projects?",
    answer:
      "Yes. Following this roadmap enables you to build full-stack projects such as dashboards, SaaS platforms, real-time chat apps, and scalable backend systems."
  },
  {
    question: "What should I focus on while following this roadmap?",
    answer:
      "Focus on understanding core concepts, building small projects for each topic, reading documentation, and gradually combining concepts into full-stack applications."
  }
];


    return (
        <>
            {qnaList.map((item, idx) => (
                <div
                    key={idx}
                    className='rounded mb-2 border-2 mt-4 p-3'
                >
                    <div
                        onClick={() => handdeltoggle(idx)}
                        className='cursor-pointer font-semibold flex justify-between'
                    >
                        {item.question}
                        <span>{openIndex === idx ? <FolderOpen /> : <FolderClosed />}</span>
                    </div>
                    {openIndex === idx && (
                        <p
                            className='mt-2 font-bold border-t px-2'>
                            {item.answer}
                        </p>
                    )}
                </div>
            ))}
        </>
    )
}

export default QnA