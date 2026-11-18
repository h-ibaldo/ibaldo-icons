import { SvelteComponent } from 'svelte';

export interface ChatStackTypingFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackTypingFlipped extends SvelteComponent<ChatStackTypingFlippedProps> {}
