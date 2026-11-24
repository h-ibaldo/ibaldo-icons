import { SvelteComponent } from 'svelte';

export interface AlignSquareBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlignSquareBottom extends SvelteComponent<AlignSquareBottomProps> {}
