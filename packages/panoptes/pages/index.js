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
import Bazarr from '@panoptes/widget-bazarr';
import Transmission from '@panoptes/widget-transmission';
import NZBGet from '@panoptes/widget-nzbget';
import NZBHydra from '@panoptes/widget-nzbhydra';
import Jackett from '@panoptes/widget-jackett';
import Radarr from '@panoptes/widget-radarr';
import Sonarr from '@panoptes/widget-sonarr';
import LazyLibrarian from '@panoptes/widget-lazylibrarian';
import Lidarr from '@panoptes/widget-lidarr';
import Mylar from '@panoptes/widget-mylar';
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
			<Bazarr uri={`//bazarr.${publicRuntimeConfig.host}/`}/>
			<Transmission uri={`//transmission.${publicRuntimeConfig.host}/`}/>
			<NZBGet uri={`//nzbget.${publicRuntimeConfig.host}/`}/>
			<NZBHydra uri={`//nzbhydra.${publicRuntimeConfig.host}/`}/>
			<Jackett uri={`//jackett.${publicRuntimeConfig.host}/`}/>
			<Radarr uri={`//radarr.${publicRuntimeConfig.host}/`}/>
			<Sonarr uri={`//sonarr.${publicRuntimeConfig.host}/`}/>
			<LazyLibrarian uri={`//lazylibrarian.${publicRuntimeConfig.host}/`}/>
			<Lidarr uri={`//lidarr.${publicRuntimeConfig.host}/`}/>
			<Mylar uri={`//mylar.${publicRuntimeConfig.host}/`}/>
		</Widgets>
	</Layout>
);

export default Page;

