import { SvelteComponent } from 'svelte';

export interface Bell4ClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell4Clock extends SvelteComponent<Bell4ClockProps> {}
