import { SvelteComponent } from 'svelte';

export interface AtClockBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtClockBoxy extends SvelteComponent<AtClockBoxyProps> {}
