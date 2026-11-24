import { SvelteComponent } from 'svelte';

export interface BetweenVerticalStartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BetweenVerticalStart extends SvelteComponent<BetweenVerticalStartProps> {}
