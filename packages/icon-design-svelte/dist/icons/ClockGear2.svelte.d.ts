import { SvelteComponent } from 'svelte';

export interface ClockGear2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockGear2 extends SvelteComponent<ClockGear2Props> {}
