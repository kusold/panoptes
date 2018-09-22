import Header from '../Header/';
import BackgroundImage from './julian-zett-643140-unsplash.jpg';

const Layout = props => (
	<div>
		<div>
			<Header />
			{ props.children }
		</div>
		<style jsx>{`
			div {
				background-image: url("${BackgroundImage}");
				background-size: cover;
				height: 100%;
				width: 100%;
				display: flex;
				flex-direction: column;
			}
		`}</style>
		<style jsx global>{`
			* {
				box-sizing: border-box;
				margin: 0;
				padding: 0;
				font-family: sans-serif;
				color: #fff;
				text-decoration: none;
			}
			html,body {
				height:100%;
				width:100%;
			}
			#__next {
				height: 100%;
				width: 100%;
			}
		`}</style>
	</div>
);

export default Layout;

