import { Component } from 'react';
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

class Page extends Component {
	static async getInitialProps({req}) {
		let host;
		if(publicRuntimeConfig.host) {
			host = publicRuntimeConfig.host;
		} else {
		  host = req ? req.headers.host : location.hostname
		}
    return { host }
	}
	render() {
		const {host} = this.props;
		return (
			<Layout>
				<Search />
				<Widgets>
					<Traefik uri={`//traefik.${host}/`}/>
					<Portainer uri={`//portainer.${host}/`}/>
					<Kibana uri={`//kibana.${host}/`}/>
					<Grafana uri={`//grafana.${host}/`}/>
					<Netdata uri={`//netdata.${host}/`}/>
					<Prometheus uri={`//prometheus.${host}/`}/>
					<ElasticSearch uri={`//elasticsearch.${host}/`}/>
					<CAdvisor uri={`//cadvisor.${host}/`}/>
					<Bazarr uri={`//bazarr.${host}/`}/>
					<Transmission uri={`//transmission.${host}/`}/>
					<NZBGet uri={`//nzbget.${host}/`}/>
					<NZBHydra uri={`//nzbhydra.${host}/`}/>
					<Jackett uri={`//jackett.${host}/`}/>
					<Radarr uri={`//radarr.${host}/`}/>
					<Sonarr uri={`//sonarr.${host}/`}/>
					<LazyLibrarian uri={`//lazylibrarian.${host}/`}/>
					<Lidarr uri={`//lidarr.${host}/`}/>
					<Mylar uri={`//mylar.${host}/`}/>
				</Widgets>
			</Layout>
		);
	}
}

export default Page;

