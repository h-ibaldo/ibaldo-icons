import { SvelteComponent } from 'svelte';

export interface AlignSquareTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlignSquareTop extends SvelteComponent<AlignSquareTopProps> {}
