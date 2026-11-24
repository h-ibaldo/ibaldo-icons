import { SvelteComponent } from 'svelte';

export interface ChatUnderlineTypingBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatUnderlineTypingBroken extends SvelteComponent<ChatUnderlineTypingBrokenProps> {}
