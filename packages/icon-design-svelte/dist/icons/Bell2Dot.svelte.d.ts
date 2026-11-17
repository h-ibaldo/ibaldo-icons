import { SvelteComponent } from 'svelte';

export interface Bell2DotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell2Dot extends SvelteComponent<Bell2DotProps> {}
