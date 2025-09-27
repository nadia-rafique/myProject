import { Download } from "lucide-react"; // assuming you're using lucide-react

export default function ResumeButton() {
  return (
    <a
      href="/Nadia_Resume.pdf"
      download="Nadia_Resume.pdf"
      className="px-6 py-3 border border-gray-600 text-white rounded-lg font-medium hover:bg-gray-800/50 transition-all flex items-center gap-2 hover:scale-105"
    >
      <Download size={16} />
      Download Resume
    </a>
  );
}
