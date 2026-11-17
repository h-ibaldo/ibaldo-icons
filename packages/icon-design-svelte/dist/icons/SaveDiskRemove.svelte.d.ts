import { SvelteComponent } from 'svelte';

export interface SaveDiskRemoveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveDiskRemove extends SvelteComponent<SaveDiskRemoveProps> {}
