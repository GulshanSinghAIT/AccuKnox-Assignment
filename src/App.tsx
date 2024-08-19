
import { WidgetProvider } from '../src/assets/WidgetContext';
import Dashboard from '../src/assets/Dashboard';
import SearchWidget from '../src/assets/SearchWidget';
import './App.css'
const App = () => {
  return (
    <WidgetProvider>
      <div className='max-w-[95%] mx-auto'>
        <SearchWidget />
        <Dashboard />
      </div>
    </WidgetProvider>
  );
};

export default App;
