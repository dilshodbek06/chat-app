import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import DarkMode from "./Dark-mode";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = async () => {
  //

  const { getUser } = getKindeServerSession();

  const user = await getUser();

  return (
    <header className="min-h-[60px] bg-[#a4bada] dark:bg-slate-800 shadow-md  flex items-center">
      <div className="container px-3 max-w-6xl mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex gap-x-4 items-center">
          {user ? (
            <LogoutLink>
              <Button className="dark:bg-slate-700">Log Out</Button>
            </LogoutLink>
          ) : (
            <LoginLink>
              <Button>Login</Button>
            </LoginLink>
          )}

          <DarkMode />
          <div>
            {user && (
              <Avatar className="w-8 h-8">
                <AvatarImage src={user.picture ?? ""} />
                <AvatarFallback>
                  {user.given_name?.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
