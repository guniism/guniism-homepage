export default function About() {
  return (
    <div id="about" className="h-auto w-full flex flex-col items-center p-5">
      <div className="max-w-2xl w-full h-full  flex flex-col bg-con rounded-lg p-5 border border-bd">
        <h2 className=" font-semibold text-4xl mx-auto">About me</h2>
        <div className="flex flex-col">
          <h3 className="font-semibold text-2xl">
            <u>Skills</u>
          </h3>
          <p>
            Programming Languages: C#, C++, Python
            <br />
            Web Development: HTML, CSS, JavaScript, ReactJS, Next.js, Vite,
            TailwindCSS
            <br />
            Tools: Git
          </p>
        </div>
        <div className="flex flex-col mt-10">
          <h3 className="font-semibold text-2xl">
            <u>Education</u>
          </h3>
          <p>
            <b>B.Eng. Computer Engineering and Digital Technology</b>
            <br />
            Chulalongkorn University &nbsp;<em>August 2024 - Present</em>
            <br />
            GPAX 3.70
            <br />
            <br />
            <b>Science - Health</b>
            <br />
            Assumption College Rayong &nbsp;<em>May 2020 - March 2023</em>
            <br />
            GPAX 3.92
          </p>
        </div>
      </div>
      <div className="p-12"></div>
    </div>
  );
}
