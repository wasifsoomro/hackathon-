import Header from "./(components)/Header";

import Hero from "./(components)/Hero";
import Brands from "./(components)/Brands";
import NewArrivals from "./(components)/NewArrival";
import TopSelling from "./(components)/TopSelling";
import BrowseStyles from "./(components)/BrowseStyles";
import HappyCustomers from "./(components)/HappyCutsomers";
import Footer from "./(components)/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Brands />
    <NewArrivals />
    <hr />
    <TopSelling />
    <BrowseStyles />
    <HappyCustomers />
    <Footer />
    </>
  );
}
