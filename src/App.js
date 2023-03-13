import { 
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/help/Faq';
import Contact, { contactAction } from './pages/help/Contact';
import NotFound from './pages/NotFound';
import Products, { productLoader } from './pages/products/Products';
import ProductDetails, { productDetailsLoader } from './pages/products/ProductDetails';
import ProductError from './pages/products/ProductError';

// Layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import ProductsLayout from './layouts/ProductsLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction}/>
      </Route>

      <Route path="products" element={<ProductsLayout />} errorElement={<ProductError />}>
        <Route 
          index 
          element={<Products />} 
          loader={productLoader}  
        />
        <Route 
          path=":id"
          element={<ProductDetails />}
          loader={productDetailsLoader} 
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App

