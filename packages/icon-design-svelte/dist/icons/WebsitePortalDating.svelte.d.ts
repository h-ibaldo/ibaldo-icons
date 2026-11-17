import { SvelteComponent } from 'svelte';

export interface WebsitePortalDatingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalDating extends SvelteComponent<WebsitePortalDatingProps> {}
