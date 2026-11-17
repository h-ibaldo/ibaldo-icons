import { SvelteComponent } from 'svelte';

export interface ChatStackUnderlineTypingBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackUnderlineTypingBoxy extends SvelteComponent<ChatStackUnderlineTypingBoxyProps> {}
