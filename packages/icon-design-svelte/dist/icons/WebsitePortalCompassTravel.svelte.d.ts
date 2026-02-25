import { SvelteComponent } from 'svelte';

export interface WebsitePortalCompassTravelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalCompassTravel extends SvelteComponent<WebsitePortalCompassTravelProps> {}
