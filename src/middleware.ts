import { authMiddleware } from "@clerk/nextjs";

console.log("m running");
export default authMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
