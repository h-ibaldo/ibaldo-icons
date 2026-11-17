import { SvelteComponent } from 'svelte';

export interface WebsitePortalCameraProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalCamera extends SvelteComponent<WebsitePortalCameraProps> {}
