import { SvelteComponent } from 'svelte';

export interface SaveFloppyDisk1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveFloppyDisk1 extends SvelteComponent<SaveFloppyDisk1Props> {}
