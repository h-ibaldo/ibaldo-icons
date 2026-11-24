import { SvelteComponent } from 'svelte';

export interface HourglassCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassCircle extends SvelteComponent<HourglassCircleProps> {}
