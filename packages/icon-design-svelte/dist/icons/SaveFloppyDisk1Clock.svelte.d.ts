import { SvelteComponent } from 'svelte';

export interface SaveFloppyDisk1ClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveFloppyDisk1Clock extends SvelteComponent<SaveFloppyDisk1ClockProps> {}
