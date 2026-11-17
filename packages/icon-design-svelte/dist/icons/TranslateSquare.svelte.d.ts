import { SvelteComponent } from 'svelte';

export interface TranslateSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TranslateSquare extends SvelteComponent<TranslateSquareProps> {}
