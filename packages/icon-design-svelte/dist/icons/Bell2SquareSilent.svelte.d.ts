import { SvelteComponent } from 'svelte';

export interface Bell2SquareSilentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell2SquareSilent extends SvelteComponent<Bell2SquareSilentProps> {}
