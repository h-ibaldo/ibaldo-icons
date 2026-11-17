import { SvelteComponent } from 'svelte';

export interface ChatStackUnderlineTypingBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackUnderlineTypingBroken extends SvelteComponent<ChatStackUnderlineTypingBrokenProps> {}
