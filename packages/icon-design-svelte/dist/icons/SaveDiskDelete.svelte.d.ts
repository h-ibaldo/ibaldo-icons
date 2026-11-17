import { SvelteComponent } from 'svelte';

export interface SaveDiskDeleteProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveDiskDelete extends SvelteComponent<SaveDiskDeleteProps> {}
