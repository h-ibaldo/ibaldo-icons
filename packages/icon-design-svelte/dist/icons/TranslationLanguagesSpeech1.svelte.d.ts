import { SvelteComponent } from 'svelte';

export interface TranslationLanguagesSpeech1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TranslationLanguagesSpeech1 extends SvelteComponent<TranslationLanguagesSpeech1Props> {}
