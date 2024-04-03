"use server";

import { db } from "@/lib/db";

interface params {
  id: string;
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
}

export default async function updateUser({
  id,
  email,
  username,
  createdAt,
  updatedAt,
}: params): Promise<void> {
  await db.user.upsert({
    where: { id: id },
    update: {
      email: email,
      username: username,
      createdAt: createdAt,
      updatedAt: updatedAt,
    },
    create: {
      id: id,
      email: email,
      username: username,
      createdAt: createdAt,
      updatedAt: updatedAt,
    },
  });
}
