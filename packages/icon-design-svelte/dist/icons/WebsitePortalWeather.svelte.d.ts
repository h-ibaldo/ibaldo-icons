import { SvelteComponent } from 'svelte';

export interface WebsitePortalWeatherProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalWeather extends SvelteComponent<WebsitePortalWeatherProps> {}
