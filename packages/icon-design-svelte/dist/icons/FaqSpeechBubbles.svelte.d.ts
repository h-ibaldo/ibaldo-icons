import { SvelteComponent } from 'svelte';

export interface FaqSpeechBubblesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FaqSpeechBubbles extends SvelteComponent<FaqSpeechBubblesProps> {}
