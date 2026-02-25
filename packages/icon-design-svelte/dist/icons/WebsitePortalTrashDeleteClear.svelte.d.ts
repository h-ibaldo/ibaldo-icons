import { SvelteComponent } from 'svelte';

export interface WebsitePortalTrashDeleteClearProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebsitePortalTrashDeleteClear extends SvelteComponent<WebsitePortalTrashDeleteClearProps> {}
