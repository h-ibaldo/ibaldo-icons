import { SvelteComponent } from 'svelte';

export interface WebsitePortalShoeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalShoe extends SvelteComponent<WebsitePortalShoeProps> {}
