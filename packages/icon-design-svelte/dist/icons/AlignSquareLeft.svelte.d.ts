import { SvelteComponent } from 'svelte';

export interface AlignSquareLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlignSquareLeft extends SvelteComponent<AlignSquareLeftProps> {}
