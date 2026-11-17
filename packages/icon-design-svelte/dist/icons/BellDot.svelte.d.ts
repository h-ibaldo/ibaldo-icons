import { SvelteComponent } from 'svelte';

export interface BellDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellDot extends SvelteComponent<BellDotProps> {}
