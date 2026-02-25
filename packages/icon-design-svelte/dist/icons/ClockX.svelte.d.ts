import { SvelteComponent } from 'svelte';

export interface ClockXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockX extends SvelteComponent<ClockXProps> {}
