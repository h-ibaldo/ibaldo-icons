import { SvelteComponent } from 'svelte';

export interface AtClockCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtClockCurved extends SvelteComponent<AtClockCurvedProps> {}
