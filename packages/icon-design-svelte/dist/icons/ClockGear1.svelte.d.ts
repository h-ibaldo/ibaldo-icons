import { SvelteComponent } from 'svelte';

export interface ClockGear1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockGear1 extends SvelteComponent<ClockGear1Props> {}
