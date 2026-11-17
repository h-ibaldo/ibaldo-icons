import { SvelteComponent } from 'svelte';

export interface BellSquareDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellSquareDot extends SvelteComponent<BellSquareDotProps> {}
