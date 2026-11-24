import { SvelteComponent } from 'svelte';

export interface ChatStackTypingSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackTypingSlant extends SvelteComponent<ChatStackTypingSlantProps> {}
