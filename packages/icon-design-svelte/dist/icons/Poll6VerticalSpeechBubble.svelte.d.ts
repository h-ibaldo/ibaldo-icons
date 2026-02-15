import { SvelteComponent } from 'svelte';

export interface Poll6VerticalSpeechBubbleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Poll6VerticalSpeechBubble extends SvelteComponent<Poll6VerticalSpeechBubbleProps> {}
