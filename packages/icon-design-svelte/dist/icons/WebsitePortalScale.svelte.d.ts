import { SvelteComponent } from 'svelte';

export interface WebsitePortalScaleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalScale extends SvelteComponent<WebsitePortalScaleProps> {}
