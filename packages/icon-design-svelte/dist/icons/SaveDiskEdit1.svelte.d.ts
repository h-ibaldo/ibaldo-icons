import { SvelteComponent } from 'svelte';

export interface SaveDiskEdit1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveDiskEdit1 extends SvelteComponent<SaveDiskEdit1Props> {}
