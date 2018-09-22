import getConfig from 'next/config'
import Layout from '../components/Layout/';
import Widgets from '../components/Widgets/';
import Traefik from 'panoptes-traefik';
import Grafana from 'panoptes-grafana';
import CAdvisor from 'panoptes-cadvisor';
import Search from 'panoptes-search';
import ElasticSearch from 'panoptes-elasticsearch';
import Kibana from 'panoptes-kibana';
import Prometheus from 'panoptes-prometheus';
import Portainer from 'panoptes-portainer';
const {publicRuntimeConfig} = getConfig();

const Page = props => (
	<Layout>
			<Search />
		<Widgets>
			<Traefik uri={`//${publicRuntimeConfig.host}:8080/`}/>
			<Grafana uri={`//grafana.${publicRuntimeConfig.host}/`}/>
			<ElasticSearch uri={`//elastic.${publicRuntimeConfig.host}/`}/>
			<CAdvisor uri={`//cadvisor.${publicRuntimeConfig.host}/`}/>
			<Kibana uri={`//kibana.${publicRuntimeConfig.host}/`}/>
			<Prometheus uri={`//prometheus.${publicRuntimeConfig.host}/`}/>
			<Portainer uri={`//portainer.${publicRuntimeConfig.host}/`}/>
		</Widgets>
	</Layout>
);

export default Page;

