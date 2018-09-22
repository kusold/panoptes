import Widget from 'panoptes-icon-title';
import icon from './prometheus-logo.svg';

const Prometheus = props => (
	<Widget backgroundColor="#08f" icon={icon} {...props}>
		Prometheus
	</Widget>
);

export default Prometheus;
