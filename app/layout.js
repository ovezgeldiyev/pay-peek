import "../public/styles/main.css";

export const metadata = {
  title: "Empowering Professionals  With Market Value Statistics",
  description:
    "Seamlessly access in-depth compensation data right from your favorite job posting platforms to verify your market value and avoid the guesswork and uncertainty when evaluating new job and promotional opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="./images/favicon.svg" type="image/x-icon" />
      </head>
      <body className="bg-bg">{children}</body>
    </html>
  );
}
