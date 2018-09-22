const Widgets = (props) => (
	<div>
		{ props.children }
		<style jsx>{`
			display: flex;
			align-content: center;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
			height: 100%;
		`}</style>
	</div>
)

export default Widgets;

