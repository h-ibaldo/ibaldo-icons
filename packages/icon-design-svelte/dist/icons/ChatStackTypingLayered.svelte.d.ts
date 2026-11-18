import { SvelteComponent } from 'svelte';

export interface ChatStackTypingLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackTypingLayered extends SvelteComponent<ChatStackTypingLayeredProps> {}
