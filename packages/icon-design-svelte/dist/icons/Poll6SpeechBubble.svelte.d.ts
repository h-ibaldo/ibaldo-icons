import { SvelteComponent } from 'svelte';

export interface Poll6SpeechBubbleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Poll6SpeechBubble extends SvelteComponent<Poll6SpeechBubbleProps> {}
