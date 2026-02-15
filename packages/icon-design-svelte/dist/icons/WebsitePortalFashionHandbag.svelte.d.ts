import { SvelteComponent } from 'svelte';

export interface WebsitePortalFashionHandbagProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalFashionHandbag extends SvelteComponent<WebsitePortalFashionHandbagProps> {}
