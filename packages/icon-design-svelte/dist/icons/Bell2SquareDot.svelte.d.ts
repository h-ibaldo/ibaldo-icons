import { SvelteComponent } from 'svelte';

export interface Bell2SquareDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell2SquareDot extends SvelteComponent<Bell2SquareDotProps> {}
