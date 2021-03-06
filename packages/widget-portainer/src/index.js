import Widget from '@panoptes/widget-icon-title';
import icon from './Portainer-logo.png';

const Portainer = props => (
	<Widget backgroundColor="#08f" icon={icon} {...props}>
		Portainer
	</Widget>
);

export default Portainer;
