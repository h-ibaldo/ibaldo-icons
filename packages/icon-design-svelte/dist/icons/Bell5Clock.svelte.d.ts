import { SvelteComponent } from 'svelte';

export interface Bell5ClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell5Clock extends SvelteComponent<Bell5ClockProps> {}
