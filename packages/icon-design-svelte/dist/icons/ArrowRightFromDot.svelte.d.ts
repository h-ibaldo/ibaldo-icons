import { SvelteComponent } from 'svelte';

export interface ArrowRightFromDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRightFromDot extends SvelteComponent<ArrowRightFromDotProps> {}
