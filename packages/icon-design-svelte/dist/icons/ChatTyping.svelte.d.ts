import { SvelteComponent } from 'svelte';

export interface ChatTypingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTyping extends SvelteComponent<ChatTypingProps> {}
