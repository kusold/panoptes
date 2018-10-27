import Link from 'next/link';

const Header = props => (
	<div>
		<Link href="/">
			<a>Home</a>
		</Link>
		<Link href="/all">
			<a>All</a>
		</Link>
		<style jsx>{`
			div {
				background: rgba(255,255,255,0.15);
				height: 5vh;
				display: inline-flex;
				width: 100%;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
			}
			a {
				font-size: 2em;
				margin: auto;
			}
		`}</style>
	</div>
)

export default Header;
