import Link from "next/link";
import React from "react";
import Image from "next/image";
import projectData from "@/app/data/projectData.json";
import { useState } from "react";

// const projectData = require("@/app/data/projectData.json");

interface Project {
  name: string;
  desc: string;
  web: string;
  repo: string;
}

interface ProjectContainerProps {
  id: keyof typeof projectData;
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({ id }) => {
  // const [hover, setHover] = useState(false);

  const { name, desc, web, repo } = projectData[id];
  // const name =  projectData[id].name;
  // const desc =  projectData[id].desc;
  // const web =  projectData[id].web;
  // const repo =  projectData[id].repo;

  const src = `/projectThumbnails/${id}.png`;
  const alt = `${id}_png`;

  return (
    <div className="w-full row-span-10 hover:cursor-pointer group relative">
      <div className="w-full h-2/3 bg-cover overflow-hidden relative">
        <div className="w-full border-t border-l border-r border-bd rounded-t-lg overflow-hidden">
          <Image
            src={src}
            width={1080}
            height={0}
            className="w-full object-contain transition group-hover:blur-sm"
            alt={alt}
            priority
          />
        </div>
        <div
          className={
            "flex flex-row justify-center space-x-5 h-full items-center absolute inset-0 opacity-0 transition group-hover:opacity-100"
          }
        >
          <Link
            href={repo}
            className="w-2/5 h-1/3 bg-con rounded-xl hover:bg-con
             flex items-center justify-center"
          >
            View Repo
          </Link>
          <Link
            href={web}
            className="w-2/5 h-1/3 bg-green rounded-xl hover:bg-lgreen
             flex items-center justify-center"
          >
            Visit Web
          </Link>
        </div>
      </div>
      <div className="bg-con h-1/3 content-center px-3 rounded-b-lg border-b border-l border-r border-bd">
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="font-light">{desc}</p>
      </div>
    </div>
  );
};

export default function Project() {
  return (
    <div
      id="project"
      className="h-auto w-full bg-base flex flex-col items-center p-5"
    >
      <div className="max-w-3xl w-full h-full">
        <h2 className=" font-semibold text-4xl ">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 my-5">
          {Object.keys(projectData).map((key) => (
            <ProjectContainer key={key} id={key as keyof typeof projectData} />
          ))}
        </div>
      </div>
    </div>
  );
}
