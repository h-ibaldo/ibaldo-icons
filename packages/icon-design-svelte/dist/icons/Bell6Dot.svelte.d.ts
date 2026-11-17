import { SvelteComponent } from 'svelte';

export interface Bell6DotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell6Dot extends SvelteComponent<Bell6DotProps> {}
