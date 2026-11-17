import { SvelteComponent } from 'svelte';

export interface ChatTypingPointedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTypingPointed extends SvelteComponent<ChatTypingPointedProps> {}
