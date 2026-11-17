import { SvelteComponent } from 'svelte';

export interface ChatStackTypingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackTyping extends SvelteComponent<ChatStackTypingProps> {}
