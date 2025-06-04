
import React from "react";

export default function App() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      <section className="min-h-screen flex flex-col justify-center items-center p-8 text-center bg-gradient-to-r from-indigo-100 to-purple-100">
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Divya M</h1>
        <p className="text-lg max-w-xl">
          Software QA Tester with 3.9 years of experience in manual and automation testing.
          Skilled in Selenium, Java, Postman, and MySQL. Passionate about quality, collaboration,
          and continuous improvement.
        </p>
        <a
          href="/resume.pdf"
          className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-2xl shadow hover:bg-indigo-700"
          download
        >
          Download Resume
        </a>
      </section>

      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="mb-2">
          I specialize in mobile, API, backend, and web testing. I’ve worked on high-impact projects
          at Amazon, ensuring scalable, reliable, and user-friendly software.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Skills</h3>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Testing:</strong> Manual, Automation, Regression, Cross-browser, Accessibility</li>
          <li><strong>Tools:</strong> Selenium, TestNG, Postman, Jira, TestRail, Maven, Git</li>
          <li><strong>Languages:</strong> Java, MySQL, JavaScript (basic)</li>
          <li><strong>Platforms:</strong> Android, iOS, Web</li>
        </ul>
      </section>

      <section className="p-8 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div>
          <h3 className="text-xl font-bold">Amazon Development Center (Aug 2022 – Present)</h3>
          <p>
            Performed manual and automated testing for mobile and web apps. Built test cases, automated
            scripts using Selenium, and conducted API and backend validation. Contributed to device testing
            and feature launches in an Agile environment.
          </p>
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: <a href="mailto:divya19081998@gmail.com" className="text-indigo-600 hover:underline">divya19081998@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/divya-manimaran-7a6891210" className="text-indigo-600 hover:underline">linkedin.com/in/divya-manimaran</a></p>
      </section>
    </main>
  );
}
