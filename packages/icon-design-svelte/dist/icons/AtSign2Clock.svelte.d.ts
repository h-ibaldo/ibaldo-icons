import { SvelteComponent } from 'svelte';

export interface AtSign2ClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign2Clock extends SvelteComponent<AtSign2ClockProps> {}
