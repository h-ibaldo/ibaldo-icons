import { SvelteComponent } from 'svelte';

export interface MinimizeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Minimize extends SvelteComponent<MinimizeProps> {}
