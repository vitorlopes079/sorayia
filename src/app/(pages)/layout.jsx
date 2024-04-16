import Header from "../_components/Header";
import Footer from "../_components/Footer";


export const metadata = {
  title: "Sorayia",
  icons: {
    icon: "images/sorayia-fav-icon.png",
  },
};

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />

  </>
);

export default Layout;
