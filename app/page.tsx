import Chat from "@/components/Chat";
import Navbar from "@/components/my/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="min-h-[34.2rem] bg-[#8BABD8] dark:bg-slate-700 flex justify-center items-center">
        <Chat />
      </div>
    </div>
  );
}
