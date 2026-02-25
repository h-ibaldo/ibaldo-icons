import { SvelteComponent } from 'svelte';

export interface ClockWarning2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockWarning2 extends SvelteComponent<ClockWarning2Props> {}
