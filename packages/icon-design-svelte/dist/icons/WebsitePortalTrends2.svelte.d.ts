import { SvelteComponent } from 'svelte';

export interface WebsitePortalTrends2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalTrends2 extends SvelteComponent<WebsitePortalTrends2Props> {}
