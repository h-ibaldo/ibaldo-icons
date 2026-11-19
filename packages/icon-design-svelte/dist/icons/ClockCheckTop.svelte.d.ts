import { SvelteComponent } from 'svelte';

export interface ClockCheckTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockCheckTop extends SvelteComponent<ClockCheckTopProps> {}
