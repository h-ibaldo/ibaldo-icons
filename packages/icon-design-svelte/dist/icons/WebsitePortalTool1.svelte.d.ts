import { SvelteComponent } from 'svelte';

export interface WebsitePortalTool1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalTool1 extends SvelteComponent<WebsitePortalTool1Props> {}
