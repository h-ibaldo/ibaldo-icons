import { SvelteComponent } from 'svelte';

export interface HourglassStandCircleCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassStandCircleCurved extends SvelteComponent<HourglassStandCircleCurvedProps> {}
