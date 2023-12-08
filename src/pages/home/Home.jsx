import c1 from '../../img/category/1.jpg'
import c2 from '../../img/category/2.jpg'
import c3 from '../../img/category/3.jpg'
import c4 from '../../img/category/4.jpg'

import './style.css'

const Home = () => {
	return (
		<main className="main">
			<section className="welcome">
				<h1 className="welcome__title title">РЕЦЕПТЫ НА ВСЕ СЛУЧАИ</h1>
				<div><button>Выбрать</button></div>
			</section>

			<section className="category">
				<h2 className="category__title title-second">ВЫБЕРИ КАТЕГОРИЮ</h2>
				<div className="categories">
					<div className="category__box">
						<img className="category__img" src={c1} />
							<h4 className="category__name">ЗАВТРАК</h4>
					</div>
					<div className="category__box">
						<img className="category__img" src={c2} />
							<h4 className="category__name">ОБЕД</h4>
					</div>
					<div className="category__box">
						<img className="category__img" src={c3} />
							<h4 className="category__name">УЖИН</h4>
					</div>
					<div className="category__box">
						<img className="category__img" src={c4} />
							<h4 className="category__name">ДЕСЕРТ</h4>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Home;