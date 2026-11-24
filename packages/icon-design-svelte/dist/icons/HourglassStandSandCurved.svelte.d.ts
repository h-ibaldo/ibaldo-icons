import { SvelteComponent } from 'svelte';

export interface HourglassStandSandCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassStandSandCurved extends SvelteComponent<HourglassStandSandCurvedProps> {}
