import { SvelteComponent } from 'svelte';

export interface Bell5SquareDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell5SquareDot extends SvelteComponent<Bell5SquareDotProps> {}
