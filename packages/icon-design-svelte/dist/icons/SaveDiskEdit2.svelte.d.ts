import { SvelteComponent } from 'svelte';

export interface SaveDiskEdit2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveDiskEdit2 extends SvelteComponent<SaveDiskEdit2Props> {}
