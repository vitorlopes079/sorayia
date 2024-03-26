import Header from "../_components/Header";
import Footer from "../_components/Footer"
const Layout = ({ children }) => (
  <>
    <Header />
    <div>
      
    </div>
    {children}
    <Footer />
  </>
);

export default Layout;
