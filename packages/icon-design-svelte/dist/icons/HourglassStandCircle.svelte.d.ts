import { SvelteComponent } from 'svelte';

export interface HourglassStandCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassStandCircle extends SvelteComponent<HourglassStandCircleProps> {}
