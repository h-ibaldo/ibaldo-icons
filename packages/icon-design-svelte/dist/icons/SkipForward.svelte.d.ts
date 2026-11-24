import { SvelteComponent } from 'svelte';

export interface SkipForwardProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SkipForward extends SvelteComponent<SkipForwardProps> {}
