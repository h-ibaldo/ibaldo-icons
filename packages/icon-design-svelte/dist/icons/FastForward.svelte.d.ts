import { SvelteComponent } from 'svelte';

export interface FastForwardProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FastForward extends SvelteComponent<FastForwardProps> {}
