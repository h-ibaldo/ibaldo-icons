import { SvelteComponent } from 'svelte';

export interface WebsitePortalFlowerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalFlower extends SvelteComponent<WebsitePortalFlowerProps> {}
