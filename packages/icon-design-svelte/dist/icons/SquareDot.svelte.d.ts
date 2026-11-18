import { SvelteComponent } from 'svelte';

export interface SquareDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareDot extends SvelteComponent<SquareDotProps> {}
