import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header className="HD">
        <h1 className="MH TG">{project.name}</h1>
        <a
          href={project.url}
          title="Explore"
          target="_blank"
          rel="noopener noreferrer"
          className="HDA"
        >
          Explore
        </a>
      </header>

      <div className="PT">
        <PortableText value={project.content} />
      </div>

      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="PI"
      />
    </div>
  );
}
