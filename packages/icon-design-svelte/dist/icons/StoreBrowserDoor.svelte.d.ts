import { SvelteComponent } from 'svelte';

export interface StoreBrowserDoorProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StoreBrowserDoor extends SvelteComponent<StoreBrowserDoorProps> {}
