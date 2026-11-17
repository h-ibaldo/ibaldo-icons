import { SvelteComponent } from 'svelte';

export interface WebsitePortalBillProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalBill extends SvelteComponent<WebsitePortalBillProps> {}
