import { SvelteComponent } from 'svelte';

export interface FullscreenSquareSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FullscreenSquareSharp extends SvelteComponent<FullscreenSquareSharpProps> {}
