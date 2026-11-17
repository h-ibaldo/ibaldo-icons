import { SvelteComponent } from 'svelte';

export interface WebsitePortalHeartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalHeart extends SvelteComponent<WebsitePortalHeartProps> {}
