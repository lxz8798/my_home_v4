import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MenuList } from '../components/common/navigator/Menu'
import { Footer } from '../components/common/footer';
import { NavigatorComp } from '../components/common/navigator';
import { MoreLinks } from '../components/common/more';

interface IAppRouterProps {

}

export const AppRouter = (props: IAppRouterProps) => {
  const _pagesRoute = MenuList.map((item) => (<Route path={item.to} element={<item.component />} />))
  return (
    <BrowserRouter>
      <NavigatorComp />
      <Routes>
        {_pagesRoute}
      </Routes>
      <MoreLinks />
      <Footer />
    </BrowserRouter>
  );
};