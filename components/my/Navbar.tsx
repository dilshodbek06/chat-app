import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import DarkMode from "./Dark-mode";

const Navbar = () => {
  return (
    <header className="min-h-[60px] bg-[#a4bada] dark:bg-slate-800 shadow-md  flex items-center">
      <div className="container px-3 max-w-6xl mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex gap-x-3 items-center">
          <Button>Login</Button>
          <DarkMode />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
