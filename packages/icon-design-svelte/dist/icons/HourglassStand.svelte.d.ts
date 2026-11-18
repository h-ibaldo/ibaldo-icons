import { SvelteComponent } from 'svelte';

export interface HourglassStandProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassStand extends SvelteComponent<HourglassStandProps> {}
