import { SvelteComponent } from 'svelte';

export interface TranslationArrowsSpeechProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TranslationArrowsSpeech extends SvelteComponent<TranslationArrowsSpeechProps> {}
