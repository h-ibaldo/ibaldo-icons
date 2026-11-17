import { SvelteComponent } from 'svelte';

export interface WebsitePortalHandbagProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalHandbag extends SvelteComponent<WebsitePortalHandbagProps> {}
