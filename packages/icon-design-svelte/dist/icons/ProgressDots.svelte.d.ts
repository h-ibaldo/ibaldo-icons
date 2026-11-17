import { SvelteComponent } from 'svelte';

export interface ProgressDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ProgressDots extends SvelteComponent<ProgressDotsProps> {}
