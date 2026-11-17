import { SvelteComponent } from 'svelte';

export interface Bell3ClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell3Clock extends SvelteComponent<Bell3ClockProps> {}
