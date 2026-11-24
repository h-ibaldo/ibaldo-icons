import { SvelteComponent } from 'svelte';

export interface FullscreenCornersInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FullscreenCornersIn extends SvelteComponent<FullscreenCornersInProps> {}
