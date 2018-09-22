const Widget = props => (
	<div>
		<a href={props.uri}>
			{props.children}
			<style jsx>{`
				background-color: ${props.backgroundColor};
				border-radius: 6px;
				color: #fff;
				height: 90px;
				margin: 20px;
				overflow: hidden;
				padding: 15px;
				width: 280px;

				a {
					display: block;
				}
			`}</style>
		</a>
	</div>
);

export default Widget;
