import { SvelteComponent } from 'svelte';

export interface WebsitePortalWarningProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalWarning extends SvelteComponent<WebsitePortalWarningProps> {}
