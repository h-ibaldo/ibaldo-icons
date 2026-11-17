import { SvelteComponent } from 'svelte';

export interface HourglassStandCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassStandCurved extends SvelteComponent<HourglassStandCurvedProps> {}
