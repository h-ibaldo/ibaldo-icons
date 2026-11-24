import { SvelteComponent } from 'svelte';

export interface SkipForwardDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SkipForwardDouble extends SvelteComponent<SkipForwardDoubleProps> {}
