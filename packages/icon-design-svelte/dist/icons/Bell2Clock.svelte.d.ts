import { SvelteComponent } from 'svelte';

export interface Bell2ClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell2Clock extends SvelteComponent<Bell2ClockProps> {}
