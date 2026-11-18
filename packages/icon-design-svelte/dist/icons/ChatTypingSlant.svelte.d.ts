import { SvelteComponent } from 'svelte';

export interface ChatTypingSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTypingSlant extends SvelteComponent<ChatTypingSlantProps> {}
