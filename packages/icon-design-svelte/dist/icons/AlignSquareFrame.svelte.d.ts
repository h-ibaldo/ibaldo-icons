import { SvelteComponent } from 'svelte';

export interface AlignSquareFrameProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlignSquareFrame extends SvelteComponent<AlignSquareFrameProps> {}
