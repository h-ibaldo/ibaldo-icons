import { SvelteComponent } from 'svelte';

export interface WebsitePortalTool2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalTool2 extends SvelteComponent<WebsitePortalTool2Props> {}
