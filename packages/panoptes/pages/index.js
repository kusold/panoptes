import getConfig from 'next/config'
import Layout from '../components/Layout/';
import Widgets from '../components/Widgets/';
import Traefik from 'panoptes-traefik';
import Grafana from 'panoptes-grafana';
import CAdvisor from 'panoptes-cadvisor';
import Search from 'panoptes-search';
import ElasticSearch from 'panoptes-elasticsearch';
const {publicRuntimeConfig} = getConfig();

const Page = props => (
	<Layout>
			<Search />
		<Widgets>
			<Traefik uri={`//${publicRuntimeConfig.host}:8080/`}/>
			<Grafana uri={`//grafana.${publicRuntimeConfig.host}/`}/>
			<ElasticSearch uri={`//grafana.${publicRuntimeConfig.host}/`}/>
			<CAdvisor uri={`//cadvisor.${publicRuntimeConfig.host}/`}/>
		</Widgets>
	</Layout>
);

export default Page;

