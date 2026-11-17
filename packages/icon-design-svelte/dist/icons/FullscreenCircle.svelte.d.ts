import { SvelteComponent } from 'svelte';

export interface FullscreenCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FullscreenCircle extends SvelteComponent<FullscreenCircleProps> {}
