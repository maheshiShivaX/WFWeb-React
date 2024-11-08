import AboutUs from "./Shared/AboutUs";
import Banner from "./Shared/Banner";
import BillingPerfected from "./Shared/BillingPerfected";
import BusinessModel from "./Shared/BusinessModel";
import CustomerSay from "./Shared/CustomerSay";
import ImageSlider from "./Shared/ImageSlider";
import Layout from "./Shared/Layout";
import ManageBusiness from "./Shared/ManageBusiness";
import ShoppingMade from "./Shared/ShoppingMade";
import TransparentPrice from "./Shared/TransparentPrice";

const Home = () => {
    return (
      <Layout>
        <Banner/>
        <AboutUs/>
        <ShoppingMade/>
        <BusinessModel/>
        <BillingPerfected/>
        {/* <ImageSlider/> */}
        <TransparentPrice/>
        <CustomerSay/>
        <ManageBusiness/>
      </Layout>
    )
}
export default Home;