// Подключение стилей
import './styles/reset.css' // Сброс стилей браузера 
import './styles/common.css' // Общие стили

// Подключение библиотек 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Импорт компонентов
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

// Подключение страниц
import Home from './pages/home/Home'

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='test' element={<Home />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
