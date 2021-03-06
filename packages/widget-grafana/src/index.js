import Widget from '@panoptes/widget-icon-title';
import icon from './grafana_icon.svg';

const Grafana = props => (
	<Widget backgroundColor="#08f" icon={icon} {...props}>
		Grafana
	</Widget>
);

export default Grafana;
