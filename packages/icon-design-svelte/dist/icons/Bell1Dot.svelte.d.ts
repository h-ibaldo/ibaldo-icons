import { SvelteComponent } from 'svelte';

export interface Bell1DotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell1Dot extends SvelteComponent<Bell1DotProps> {}
