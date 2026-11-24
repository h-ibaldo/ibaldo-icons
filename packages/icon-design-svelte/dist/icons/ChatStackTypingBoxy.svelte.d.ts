import { SvelteComponent } from 'svelte';

export interface ChatStackTypingBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackTypingBoxy extends SvelteComponent<ChatStackTypingBoxyProps> {}
