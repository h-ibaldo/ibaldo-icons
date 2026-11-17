import { SvelteComponent } from 'svelte';

export interface HourglassSandFallingCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassSandFallingCurved extends SvelteComponent<HourglassSandFallingCurvedProps> {}
