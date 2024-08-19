import Link from "next/link";
import { FaPenClip } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { RiPagesFill } from "react-icons/ri";
import { CgBrowser } from "react-icons/cg";

export default function DashboardSidebar() {
  return (
    <aside className="bg-[#212320] text-[#e8e4e8] min-h-screen px-4 py-8 lg:px-6">
      <nav>
        <ul className="space-y-6">
          <li className="flex items-center gap-3">
          <GoHomeFill /><Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="flex items-center gap-3">
          <FaPenClip /><Link href="/dashboard/articles">Articles</Link>
          </li>
          <li className="flex items-center gap-3">
          <RiPagesFill /><Link href="/dashboard/pages">Pages</Link>
          </li>
          <li className="flex items-center gap-3">
          <CgBrowser /><Link href="/">Website</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}