import { SvelteComponent } from 'svelte';

export interface ClockMinusTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockMinusTop extends SvelteComponent<ClockMinusTopProps> {}
