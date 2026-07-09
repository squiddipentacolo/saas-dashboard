import { redirect } from "next/navigation";
import { retrieveCurrentUser } from "./user";

export const requireUser = async () => {
  const currentUser = await retrieveCurrentUser();

  if (!currentUser) {
    redirect("/auth/login");
  }

  return currentUser;
};
