import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/"]);

export default clerkMiddleware((auth, req) => {
  const { userId, orgId, redirectToSignIn } = auth();
  if (userId && isPublicRoute(req)) {
    let path = "/select-org";
    if (orgId) {
      path = `/organization/${orgId}`;
    }
    const orgSelectionUrl = new URL(path, req.url);
    return NextResponse.redirect(orgSelectionUrl);
  }
  if (!userId && !isPublicRoute(req)) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }
  if (userId && !orgId && req.nextUrl.pathname !== "/select-org") {
    return NextResponse.redirect(new URL("/select-org", req.url));
  }
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
