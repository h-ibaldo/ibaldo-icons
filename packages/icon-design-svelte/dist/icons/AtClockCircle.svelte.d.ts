import { SvelteComponent } from 'svelte';

export interface AtClockCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtClockCircle extends SvelteComponent<AtClockCircleProps> {}
