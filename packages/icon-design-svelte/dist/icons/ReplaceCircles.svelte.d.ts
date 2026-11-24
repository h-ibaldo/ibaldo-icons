import { SvelteComponent } from 'svelte';

export interface ReplaceCirclesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ReplaceCircles extends SvelteComponent<ReplaceCirclesProps> {}
