import { SvelteComponent } from 'svelte';

export interface SaveDiskCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveDiskCheck extends SvelteComponent<SaveDiskCheckProps> {}
