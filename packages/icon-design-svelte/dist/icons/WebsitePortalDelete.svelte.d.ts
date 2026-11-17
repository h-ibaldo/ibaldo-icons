import { SvelteComponent } from 'svelte';

export interface WebsitePortalDeleteProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalDelete extends SvelteComponent<WebsitePortalDeleteProps> {}
