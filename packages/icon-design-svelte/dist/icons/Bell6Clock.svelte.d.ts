import { SvelteComponent } from 'svelte';

export interface Bell6ClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell6Clock extends SvelteComponent<Bell6ClockProps> {}
