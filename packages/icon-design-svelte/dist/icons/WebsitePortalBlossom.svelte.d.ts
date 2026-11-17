import { SvelteComponent } from 'svelte';

export interface WebsitePortalBlossomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalBlossom extends SvelteComponent<WebsitePortalBlossomProps> {}
