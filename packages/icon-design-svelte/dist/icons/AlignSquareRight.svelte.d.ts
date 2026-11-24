import { SvelteComponent } from 'svelte';

export interface AlignSquareRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlignSquareRight extends SvelteComponent<AlignSquareRightProps> {}
