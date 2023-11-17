import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 10;

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="HPH">
        Share your art with us, and let people rate your work.
      </h1>

      <div className="HPP">
        {projects?.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="HPL"
          >
            <div className="HPN">{project.name}</div>
            
            {project.image && (
              <Image
                src={project.image}
                width={750}
                height={300}
                alt={project.name}
                className="HPI"
              />
            )}

          </Link>
        ))}
      </div>
    </div>
  );
}
