import React from 'react'

function Frontend() {

    const Theme = [
        {
            Level: "Beginner🟢",
            Topics: [
                "Semantic HTML & Accessibility (a11y)",
                "CSS Performance (reflow, repaint)",
                "Responsive Design",
                "Component Architecture (Atomic Design",
                "Lazy Loading & Image Optimization",
            ]
        },
        {
            Level: "Intermidate🟡",
            Topics: [
                "Code Splitting",
                "CSR vs SSR vs SSG vs ISR",
                "State Management Design",
                "Debouncing & Throttling",
                "Memoization (useMemo, useCallback)",
                "Query / TanStack Query",
                "HTTP Caching (Cache-Control, ETags)",
                "Virtual List / Windowing",
                "Web Vitals (LCP, FID, CLS, FCP)",
                "Security (XSS, CSRF, CSP)",
                "REST vs GraphQL on client",
                "WebSocket & Real-time UI"
            ]
        },
        {
            Level: "Advance🔴",
            Topics: [
                "Service Workers & PWA",
                "Module Federation",
                "Micro frontend Design",
                "Monorepo(Turborepo,Nx)",
                "Build Tools (Webpack, vite internals)",
                "SSE vs Polling vs Long Polling",
                "Feature Flags & A/B Testing",
                "Hydration & prtial Hydration",
                "E2E testing (playwright, Cypress",
            ]
        },
    ]
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {Theme.map((item,index) => (
                    <div
                        key={index}
                        className='p-2 border border-blue-200 font-semibold'>
                        <h3 className='font-semibold text-center underline underline-offset-2'>{item.Level}</h3>
                        <ul className='list-disc pl-5 space-y-1'>
                        {item.Topics.map((top,i)=>(
                            <li 
                            key={i}
                            className='sm:text-md'> 
                            {top}
                            </li>
                        ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Frontend

