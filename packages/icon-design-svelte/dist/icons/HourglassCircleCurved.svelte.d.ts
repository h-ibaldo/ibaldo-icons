import { SvelteComponent } from 'svelte';

export interface HourglassCircleCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassCircleCurved extends SvelteComponent<HourglassCircleCurvedProps> {}
