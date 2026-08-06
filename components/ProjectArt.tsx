import { Project } from "@/types";

/**
 * Screenshot of a project's deployed UI. Projects without a public interface
 * (a Chrome extension, a cron job, a CLI) have no `image` and render no
 * artwork at all rather than a stand-in.
 */
export default function ProjectArt({ project }: { project: Project }) {
  if (!project.image) return null;

  return (
    <div className="overflow-hidden rounded-[20px] bg-[#0B0B0F]">
      {/* Window chrome around the capture */}
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-2 h-3.5 w-36 rounded-full bg-white/[0.07]" />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.image}
        alt={`Screenshot of ${project.name}`}
        className="block h-auto w-full"
      />
    </div>
  );
}
