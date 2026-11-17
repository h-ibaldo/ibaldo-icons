import { SvelteComponent } from 'svelte';

export interface AtSign4ClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign4Clock extends SvelteComponent<AtSign4ClockProps> {}
