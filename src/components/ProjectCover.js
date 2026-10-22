import Image from "next/image";
import { Hospital, Lock, Split, TicketPercent } from "lucide-react";

const coverIcons = {
  hospital: Hospital,
  split: Split,
  voucher: TicketPercent,
};

// Shows the first gallery screenshot when there is one, otherwise a
// branded gradient cover so projects without screenshots still look finished.
function ProjectCover({ project, compact = false, className = "" }) {
  const screenshot = project.gallery?.[0];

  if (screenshot) {
    return (
      <Image
        height={800}
        width={1280}
        className={`rounded-lg aspect-video object-cover object-top w-full ${className}`}
        src={screenshot.src}
        alt={screenshot.alt}
        loading="lazy"
      />
    );
  }

  const Icon = coverIcons[project.icon];

  if (compact) {
    return (
      <div
        className={`flex items-center justify-center rounded-lg aspect-video bg-gradient-to-br ${project.coverClassName} text-white ${className}`}
        aria-hidden="true"
      >
        {Icon && <Icon className="size-8" />}
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-lg aspect-video w-full overflow-hidden bg-gradient-to-br ${project.coverClassName} text-white ${className}`}
      role="img"
      aria-label={`${project.name} cover`}
    >
      <div className="absolute -right-6 -bottom-8 opacity-20" aria-hidden="true">
        {Icon && <Icon className="size-40" strokeWidth={1.25} />}
      </div>
      {project.confidential && (
        <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/30 px-2 py-0.5 text-xs font-semibold">
          <Lock className="size-3" aria-hidden="true" />
          Confidential
        </span>
      )}
      <div className="relative flex h-full flex-col justify-end p-4">
        {Icon && <Icon className="size-9 mb-2" aria-hidden="true" />}
        <div className="text-xl font-bold leading-tight">{project.name}</div>
        <div className="mt-2 flex flex-wrap gap-1">
          {project.platforms.map((platform) => (
            <span
              key={platform}
              className="rounded bg-white/20 px-1.5 py-0.5 text-[11px] font-medium"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCover;
