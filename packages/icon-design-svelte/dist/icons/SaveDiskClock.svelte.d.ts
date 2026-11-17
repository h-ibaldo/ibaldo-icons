import { SvelteComponent } from 'svelte';

export interface SaveDiskClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveDiskClock extends SvelteComponent<SaveDiskClockProps> {}
