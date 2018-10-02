import getConfig from 'next/config'
import Layout from '../components/Layout/';
import Widgets from '../components/Widgets/';
import Traefik from '@panoptes/widget-traefik';
import Grafana from '@panoptes/widget-grafana';
import CAdvisor from '@panoptes/widget-cadvisor';
import Search from '@panoptes/search';
import ElasticSearch from '@panoptes/widget-elasticsearch';
import Kibana from '@panoptes/widget-kibana';
import Prometheus from '@panoptes/widget-prometheus';
import Portainer from '@panoptes/widget-portainer';
import Netdata from '@panoptes/widget-netdata';
const {publicRuntimeConfig} = getConfig();

const Page = props => (
	<Layout>
			<Search />
		<Widgets>
			<Traefik uri={`//traefik.${publicRuntimeConfig.host}/`}/>
			<Portainer uri={`//portainer.${publicRuntimeConfig.host}/`}/>
			<Kibana uri={`//kibana.${publicRuntimeConfig.host}/`}/>
			<Grafana uri={`//grafana.${publicRuntimeConfig.host}/`}/>
			<Netdata uri={`//netdata.${publicRuntimeConfig.host}/`}/>
			<Prometheus uri={`//prometheus.${publicRuntimeConfig.host}/`}/>
			<ElasticSearch uri={`//elasticsearch.${publicRuntimeConfig.host}/`}/>
			<CAdvisor uri={`//cadvisor.${publicRuntimeConfig.host}/`}/>
		</Widgets>
	</Layout>
);

export default Page;

