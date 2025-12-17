import Link from "next/link";
import { Route } from "lucide-react";
import { getSectionColors } from "../constants/colors";
import { cn } from "@/lib/utils";

interface AgendaLinkProps {
  sectionId: string;
  agendaId: string;
  name: string;
  className?: string;
}

export default function AgendaLink({
  sectionId,
  agendaId,
  name,
  className,
}: AgendaLinkProps) {
  const colors = getSectionColors(sectionId);

  return (
    <Link
      href={`/${sectionId}/${agendaId}`}
      className={cn(
        "inline-flex items-center gap-1.5 text-sm px-3 py-1 rounded-full transition-colors",
        colors.bgLight,
        colors.heading,
        colors.hoverBg,
        className
      )}
    >
      <Route className="w-3.5 h-3.5" />
      {name}
    </Link>
  );
}
