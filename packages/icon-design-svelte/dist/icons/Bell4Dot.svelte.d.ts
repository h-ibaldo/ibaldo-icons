import { SvelteComponent } from 'svelte';

export interface Bell4DotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell4Dot extends SvelteComponent<Bell4DotProps> {}
