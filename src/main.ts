import db from "./db";
import userOperations from "./user-operations";

const print = async (title: string, data: unknown) => {
  console.log(title, "\n");

  console.log(data);

  console.log("\n\n");
};

async function main() {
  await userOperations.createUser({ email: "p@email.com", name: "test" });

  const user = await userOperations.getLastUser();

  print("Insert", await userOperations.getUsers());

  user &&
    (await userOperations.updateUser(user.id, {
      email: "email@email.com",
      name: "editado",
    }));

  print("Update", await userOperations.getUsers());

  user && (await userOperations.deleteUser(user.id));

  print("Delete", await userOperations.getUsers());
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
