import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <header className="bg-blue-600 text-white py-8 mb-8 shadow">
        <h1 className="text-4xl font-bold text-center">Bishes Sunuwar</h1>
        <p className="text-center mt-2">Web Developer & Designer</p>
      </header>
      <main className="max-w-2xl mx-auto px-4">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>
            Hi! I'm Bishes Sunuwar, passionate about building modern web applications and beautiful user interfaces. I love working with React, Vite, and Tailwind CSS.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <ul className="list-disc pl-5">
            <li>Portfolio Website</li>
            <li>Todo App with React</li>
            <li>Landing Page Design</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>
            Email: <a href="mailto:bishessunuwar9@gmail.com" className="text-blue-600 underline">bishessunuwar9@gmail.com</a>
          </p>
        </section>
      </main>
    </div>
  )
}

export default App