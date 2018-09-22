import Widget from '@panoptes/widget';

const IconTitle = props => (
	<Widget backgroundColor={props.backgroundColor} uri={props.uri}>
		<div className="container">
			<div className="icon">
				<img src={props.icon} />
			</div>
			<div className="title">{props.children}</div>
		</div>
		<style jsx>{`
			div.icon, img {
				height: 100%;
			}
			div.container {
				display: inline-flex;
				height: 100%;
				justify-content: center;
				align-items: center;
			}
			img {
				border-radius 90;
			}
			div.title {
				margin: 15px;
			}
		`}</style>
	</Widget>
);

export default IconTitle;
