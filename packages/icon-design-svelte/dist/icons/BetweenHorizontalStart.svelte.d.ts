import { SvelteComponent } from 'svelte';

export interface BetweenHorizontalStartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BetweenHorizontalStart extends SvelteComponent<BetweenHorizontalStartProps> {}
