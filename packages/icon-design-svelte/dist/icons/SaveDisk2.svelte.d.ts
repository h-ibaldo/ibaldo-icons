import { SvelteComponent } from 'svelte';

export interface SaveDisk2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveDisk2 extends SvelteComponent<SaveDisk2Props> {}
