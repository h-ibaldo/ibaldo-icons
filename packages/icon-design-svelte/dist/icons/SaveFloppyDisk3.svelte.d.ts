import { SvelteComponent } from 'svelte';

export interface SaveFloppyDisk3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveFloppyDisk3 extends SvelteComponent<SaveFloppyDisk3Props> {}
