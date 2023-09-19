import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    id: 'test',
    task: { create: { title: 'test', completed: true } },
  },
];

const main = (): Promise<void> =>
  new Promise((resolve) => {
    const promises = userData.map(
      async (data) => await prisma.user.create({ data }),
    );

    Promise.all(promises);

    resolve();
  });

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
