import { SvelteComponent } from 'svelte';

export interface WebsitePortalFashionShoeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalFashionShoe extends SvelteComponent<WebsitePortalFashionShoeProps> {}
