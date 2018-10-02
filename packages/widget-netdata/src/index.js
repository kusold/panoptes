import Widget from '@panoptes/widget-icon-title';
import icon from './netdata.png';

const CAdvisor = props => (
	<Widget backgroundColor="#08f" icon={icon} {...props}>
		Netdata
	</Widget>
);

export default CAdvisor;
