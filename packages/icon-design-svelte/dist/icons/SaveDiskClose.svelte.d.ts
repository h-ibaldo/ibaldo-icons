import { SvelteComponent } from 'svelte';

export interface SaveDiskCloseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveDiskClose extends SvelteComponent<SaveDiskCloseProps> {}
