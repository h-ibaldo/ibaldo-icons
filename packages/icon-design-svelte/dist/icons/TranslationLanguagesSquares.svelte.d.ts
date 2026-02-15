import { SvelteComponent } from 'svelte';

export interface TranslationLanguagesSquaresProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TranslationLanguagesSquares extends SvelteComponent<TranslationLanguagesSquaresProps> {}
