import { SvelteComponent } from 'svelte';

export interface SaveDisk3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveDisk3 extends SvelteComponent<SaveDisk3Props> {}
