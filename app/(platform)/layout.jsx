import { ClerkProvider } from "@clerk/nextjs";

const PlatformLayout = ({ children, pageProps }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default PlatformLayout;
