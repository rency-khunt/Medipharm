import React from 'react';
// import './Addcart.css';
// import './Homepage.css';
// import './Product.css';
// import Homepage from './Homepage';
// import Product from './Product';
// import Addcart from './Addcart';
import Layout from './Components/Layout';
import Product from './Product';
import Homepage from './Homepage';
import Addcart from './Addcart';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<>
			{/* <Homepage />
			<Product />
			<Addcart /> */}
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/products" element={<Product />} />
						<Route path="/cart" element={<Addcart />} />
					</Routes>
				</Layout>
			</BrowserRouter >
		</>

	);
}


export default App;
