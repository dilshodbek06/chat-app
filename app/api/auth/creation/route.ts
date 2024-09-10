import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || user === null || !user.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    let dbUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });

    if (!dbUser) {
      dbUser = await prisma.user.create({
        data: {
          id: user.id,
          email: user.email ?? "usernotfound@gmail.com",
          firstname: user.given_name ?? "User",
          password: user.email + user.id,
          profileImage: user.picture ?? "https://avatar.iran.liara.run/public",
        },
      });
    }
    return NextResponse.redirect("http://localhost:3000/");
  } catch (error) {
    console.log("[CREATE_USER]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
