import { SvelteComponent } from 'svelte';

export interface CodeSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CodeSquare extends SvelteComponent<CodeSquareProps> {}
