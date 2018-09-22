import getConfig from 'next/config'
import Layout from '../components/Layout/';
import Widgets from '../components/Widgets/';
import Traefik from 'panoptes-traefik';
const {publicRuntimeConfig} = getConfig();

const Page = props => (
	<Layout>
		<Widgets>
			<Traefik uri={`//${publicRuntimeConfig.host}:8080/`}/>
		</Widgets>
	</Layout>
);

export default Page;

