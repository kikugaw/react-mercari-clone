import { Categories } from './components';
import './index.css';
import { PageFooter, PageHeader, PageNavigation } from './layouts';

export default function App() {
  return (
    <div>
      <div className="sticky top-0 z-10 bg-white">
        <PageHeader />
        <Categories />
      </div>
      <div className="min-h-screen"></div>
      <PageFooter />
      <PageNavigation />
    </div>
  );
}
