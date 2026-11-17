import { SvelteComponent } from 'svelte';

export interface Bell1ClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell1Clock extends SvelteComponent<Bell1ClockProps> {}
