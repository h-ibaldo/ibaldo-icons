import { SvelteComponent } from 'svelte';

export interface BellRingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellRing extends SvelteComponent<BellRingProps> {}
