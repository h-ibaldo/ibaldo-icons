import { SvelteComponent } from 'svelte';

export interface ChatTypingSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTypingSharp extends SvelteComponent<ChatTypingSharpProps> {}
