import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <div>
      <style jsx>{`
        .container {
          margin: 50px;
        }
        p {
          color: blue;
        }
      `}</style>
      <Header />
      <p>try header</p>
      {children}
      <Footer />
    </div>
  );
};
