import { SvelteComponent } from 'svelte';

export interface HourglassSandCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassSandCurved extends SvelteComponent<HourglassSandCurvedProps> {}
