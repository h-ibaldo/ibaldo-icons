import { SvelteComponent } from 'svelte';

export interface QuestionsAnswersSpeechBubblesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class QuestionsAnswersSpeechBubbles extends SvelteComponent<QuestionsAnswersSpeechBubblesProps> {}
