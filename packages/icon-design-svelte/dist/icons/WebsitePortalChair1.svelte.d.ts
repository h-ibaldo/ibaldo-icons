import { SvelteComponent } from 'svelte';

export interface WebsitePortalChair1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalChair1 extends SvelteComponent<WebsitePortalChair1Props> {}
