import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data: {
        username,
        password,
        firstName,
        lastName
    },
    select: {
      id:true,
      username:true,
    }
  })
  console.log(res);
}

// insertUser("admin2", "123456", "prathamesh2", "powar2")

interface UpdateParams {
  firstName?: string;
  lastName?: string;
}

async function updateUser(username: string, {firstName, lastName}: UpdateParams) {
  const res = await prisma.user.update({
    where: {
      username
    },
    data: {
      firstName: firstName,
      lastName: lastName
    }
  })
  console.log(res);
}
updateUser("admin2", {firstName: "ojas", lastName: "powar"})