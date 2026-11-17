import { SvelteComponent } from 'svelte';

export interface AtSign5ClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign5Clock extends SvelteComponent<AtSign5ClockProps> {}
