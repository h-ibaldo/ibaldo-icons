import { SvelteComponent } from 'svelte';

export interface ChatStackUnderlineTypingSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackUnderlineTypingSlant extends SvelteComponent<ChatStackUnderlineTypingSlantProps> {}
