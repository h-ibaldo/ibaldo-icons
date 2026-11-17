import { SvelteComponent } from 'svelte';

export interface SaveDiskAddProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveDiskAdd extends SvelteComponent<SaveDiskAddProps> {}
