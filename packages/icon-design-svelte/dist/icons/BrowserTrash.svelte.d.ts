import { SvelteComponent } from 'svelte';

export interface BrowserTrashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserTrash extends SvelteComponent<BrowserTrashProps> {}
