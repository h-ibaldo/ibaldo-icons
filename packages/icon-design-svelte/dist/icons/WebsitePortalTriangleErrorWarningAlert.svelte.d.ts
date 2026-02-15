import { SvelteComponent } from 'svelte';

export interface WebsitePortalTriangleErrorWarningAlertProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalTriangleErrorWarningAlert extends SvelteComponent<WebsitePortalTriangleErrorWarningAlertProps> {}
