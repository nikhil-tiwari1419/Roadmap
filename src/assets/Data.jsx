import React from 'react'
  const [activePopup, setActivePopup] = useState(null)

function Data() {
    return (
        <div>
            {activePopup && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 w-[90%] max-w-md relative">
              <button
                onClick={() => setActivePopup(null)}
                className="absolute top-3 right-3"
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
                          <li>Hooks</li>
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
                    <li>tntroduction to c++</li>
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
        </div>
    )
}

export default Data