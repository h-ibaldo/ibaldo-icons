import { SvelteComponent } from 'svelte';

export interface SaveDiskPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveDiskPlus extends SvelteComponent<SaveDiskPlusProps> {}
