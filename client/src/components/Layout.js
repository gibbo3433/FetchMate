import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="container flex mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
