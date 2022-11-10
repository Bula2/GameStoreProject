import MainLayout from "../layouts/MainLayout";
import UnderHeader from "../components/UnderHeader/UnderHeader";
import BestSellers from "../components/BestSellers/BestSellers";
import PSBlock from "../components/PSBlock/PSBlock";

const Index = () => {
  return (
    <MainLayout>
      <>
        <UnderHeader/>
        <PSBlock/>
        <BestSellers/>
      </>
    </MainLayout>
  )
}

export default Index;
