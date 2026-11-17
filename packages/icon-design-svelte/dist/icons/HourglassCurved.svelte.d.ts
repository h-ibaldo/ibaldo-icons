import { SvelteComponent } from 'svelte';

export interface HourglassCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassCurved extends SvelteComponent<HourglassCurvedProps> {}
