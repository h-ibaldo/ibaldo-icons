import { SvelteComponent } from 'svelte';

export interface ClockTicksAngledProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockTicksAngled extends SvelteComponent<ClockTicksAngledProps> {}
