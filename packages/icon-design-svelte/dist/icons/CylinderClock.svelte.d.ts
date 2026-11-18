import { SvelteComponent } from 'svelte';

export interface CylinderClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CylinderClock extends SvelteComponent<CylinderClockProps> {}
