import { SvelteComponent } from 'svelte';

export interface Bell5SquareSilentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell5SquareSilent extends SvelteComponent<Bell5SquareSilentProps> {}
