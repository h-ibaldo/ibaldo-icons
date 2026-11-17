import { SvelteComponent } from 'svelte';

export interface ClockGearProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockGear extends SvelteComponent<ClockGearProps> {}
