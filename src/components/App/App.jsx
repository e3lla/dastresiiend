import Font from '../../../public/Font/Font';
import Footer from '../Footer/Footer';
import GrayPart from '../GrayPart/GrayPart';
import Header from '../Header/Header';
import Home from '../Home/Home'
import UnderFooter from '../UnderFooter/UnderFooter';

const App = () => {
   return ( 
      <Font>
      <Header/>
      <div className="2xl:pt-[13%] xl:pt-[14%] lg:pt-[17%] md:pt-[12%] sm:pt-[18%] pt-[22%] text-[#757575]">
      <Home/>
      <GrayPart/>
      <Footer/>
      </div>
      <div className="bottom-0 sm:mt-[10%] mt-[130%]">
      <UnderFooter/>
      </div>
      </Font>
   );
}
 
export default App;



