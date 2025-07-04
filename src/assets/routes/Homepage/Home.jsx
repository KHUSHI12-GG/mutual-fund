
import Navbar from './Navbar';
import Rating from './Rating';
import Mutualfund from './Mutualfund';
import Footer from './Footer';
import InsuranceDashboard from './InsuranceDashboard';
import Licsection from './LICPolicies';
import FinancialCalculator from './FinancialCalculator';



 

const Home = () => {





  
 return (
    <div>
      <Navbar />
      <Mutualfund />
      <InsuranceDashboard />
      <FinancialCalculator/>
      <Licsection />

      <Rating />
     
    <Footer />
      
    </div>
  );
};

export default Home;
