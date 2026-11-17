import { SvelteComponent } from 'svelte';

export interface Bell5DotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell5Dot extends SvelteComponent<Bell5DotProps> {}
