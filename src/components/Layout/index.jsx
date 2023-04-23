import Footer from "../Footer";
import Navbar from "../Navbar";

function Layout({ children }) {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
