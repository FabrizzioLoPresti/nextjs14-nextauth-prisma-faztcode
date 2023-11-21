import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/libs/prisma';

export const POST = async (req: Request) => {
  try {
    const { username, email, password } = await req.json();

    const userFound = await prisma.users.findFirst({
      where: {
        OR: [
          {
            username,
          },
          {
            email,
          },
        ],
      },
    });

    if (userFound) {
      return NextResponse.json(
        {
          error: "User already exists",
        },
        { status: 400 }
      );
    }

    const user = await prisma.users.create({
      data: {
        username,
        email,
        password: await bcrypt.hash(password, 10),
      },
    });

    // return NextResponse.redirect("/auth/login");
    const { password: _, ...rest } = user;
    return NextResponse.json(rest);
  } catch (error: any) {
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
};
