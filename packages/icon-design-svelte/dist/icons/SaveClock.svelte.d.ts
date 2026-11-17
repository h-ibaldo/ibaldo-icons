import { SvelteComponent } from 'svelte';

export interface SaveClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveClock extends SvelteComponent<SaveClockProps> {}
