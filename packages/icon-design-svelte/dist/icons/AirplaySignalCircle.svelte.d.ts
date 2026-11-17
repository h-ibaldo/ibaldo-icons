import { SvelteComponent } from 'svelte';

export interface AirplaySignalCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AirplaySignalCircle extends SvelteComponent<AirplaySignalCircleProps> {}
