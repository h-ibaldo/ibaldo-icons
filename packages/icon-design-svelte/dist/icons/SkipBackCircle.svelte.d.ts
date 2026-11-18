import { SvelteComponent } from 'svelte';

export interface SkipBackCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SkipBackCircle extends SvelteComponent<SkipBackCircleProps> {}
