import { SvelteComponent } from 'svelte';

export interface ArrowLeftFromDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowLeftFromDot extends SvelteComponent<ArrowLeftFromDotProps> {}
