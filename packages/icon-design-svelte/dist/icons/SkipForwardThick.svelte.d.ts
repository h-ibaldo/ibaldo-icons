import { SvelteComponent } from 'svelte';

export interface SkipForwardThickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SkipForwardThick extends SvelteComponent<SkipForwardThickProps> {}
