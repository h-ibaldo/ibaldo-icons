import { SvelteComponent } from 'svelte';

export interface ChatUnderlineTypingSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatUnderlineTypingSlant extends SvelteComponent<ChatUnderlineTypingSlantProps> {}
