import { SvelteComponent } from 'svelte';

export interface ProgressDotsCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ProgressDotsCenter extends SvelteComponent<ProgressDotsCenterProps> {}
