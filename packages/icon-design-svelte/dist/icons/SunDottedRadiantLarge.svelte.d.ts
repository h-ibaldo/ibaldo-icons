import { SvelteComponent } from 'svelte';

export interface SunDottedRadiantLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunDottedRadiantLarge extends SvelteComponent<SunDottedRadiantLargeProps> {}
