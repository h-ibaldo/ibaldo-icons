import { SvelteComponent } from 'svelte';

export interface WebsitePortalLawScaleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalLawScale extends SvelteComponent<WebsitePortalLawScaleProps> {}
