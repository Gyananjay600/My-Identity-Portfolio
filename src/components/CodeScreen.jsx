import { useTypewriter } from "../hooks/useTypewriter.js";
import { profile } from "../data/profile.js";

const CODE_LINES = [
  "public class Gyananjay {",
  "",
  "    // Java Full Stack Developer",
  "    private String name = \"Gyananjay Sahoo\";",
  "    private String role = \"Spring Boot + React\";",
  "    private boolean curious = true;",
  "",
  "    public String aboutMe() {",
  "        return \"Builds real systems,\"",
  "             + \" not copied patterns.\";",
  "    }",
  "",
  "    public static void main(String[] args) {",
  "        System.out.println(aboutMe());",
  "    }",
  "}",
];

export default function CodeScreen() {
  const { completedLines, activeLine } = useTypewriter(CODE_LINES, {
    speed: 26,
    pause: 2200,
  });

  return (
    <div
      style={{ width: 620, height: 375 }}
      className="flex flex-col overflow-hidden rounded-[6px] bg-[#0F1E1D] font-mono text-[15px] leading-relaxed text-[#EADFC2] shadow-inner"
    >
      <div className="flex items-center gap-1.5 border-b border-[#22403D] bg-[#122726] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#D9724F]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#D9A94B]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#7FA98C]" />
        <span className="ml-3 text-[11px] text-[#8CA6A0]">Gyananjay.java</span>
      </div>
      <div className="flex-1 overflow-hidden px-4 py-3">
        {completedLines.map((line, i) => (
          <div key={i} className="whitespace-pre">
            <span className="mr-3 text-[#4E6A65]">{String(i + 1).padStart(2, "0")}</span>
            <SyntaxLine text={line} />
          </div>
        ))}
        <div className="whitespace-pre">
          <span className="mr-3 text-[#4E6A65]">
            {String(completedLines.length + 1).padStart(2, "0")}
          </span>
          <SyntaxLine text={activeLine} />
          <span className="ml-0.5 inline-block h-[1.1em] w-[7px] translate-y-[2px] animate-pulse bg-[#B9852E]" />
        </div>
      </div>
      <div className="border-t border-[#22403D] bg-[#122726] px-3 py-1.5 text-[10px] text-[#7FA98C]">
        {profile.location} · UTF-8 · Java 17
      </div>
    </div>
  );
}

function SyntaxLine({ text }) {
  const keywords = ["public", "class", "private", "String", "boolean", "static", "void", "return", "new"];
  const parts = text.split(/(\s+)/);
  return (
    <>
      {parts.map((part, i) => {
        if (keywords.includes(part)) {
          return (
            <span key={i} className="text-[#D9A94B]">
              {part}
            </span>
          );
        }
        if (part.startsWith("//")) {
          return (
            <span key={i} className="text-[#5F8F86]">
              {part}
            </span>
          );
        }
        if (part.includes('"')) {
          return (
            <span key={i} className="text-[#B7C9A2]">
              {part}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
