import { SvelteComponent } from 'svelte';

export interface ChatStackUnderlineTypingLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackUnderlineTypingLayered extends SvelteComponent<ChatStackUnderlineTypingLayeredProps> {}
