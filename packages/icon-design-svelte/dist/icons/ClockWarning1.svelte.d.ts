import { SvelteComponent } from 'svelte';

export interface ClockWarning1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockWarning1 extends SvelteComponent<ClockWarning1Props> {}
