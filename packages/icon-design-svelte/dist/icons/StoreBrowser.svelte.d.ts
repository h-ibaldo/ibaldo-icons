import { SvelteComponent } from 'svelte';

export interface StoreBrowserProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StoreBrowser extends SvelteComponent<StoreBrowserProps> {}
