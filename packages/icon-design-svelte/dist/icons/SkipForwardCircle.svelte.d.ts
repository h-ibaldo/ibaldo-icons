import { SvelteComponent } from 'svelte';

export interface SkipForwardCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SkipForwardCircle extends SvelteComponent<SkipForwardCircleProps> {}
