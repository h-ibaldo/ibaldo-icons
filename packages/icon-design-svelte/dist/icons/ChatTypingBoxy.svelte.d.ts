import { SvelteComponent } from 'svelte';

export interface ChatTypingBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTypingBoxy extends SvelteComponent<ChatTypingBoxyProps> {}
