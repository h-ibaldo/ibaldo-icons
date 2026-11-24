import { SvelteComponent } from 'svelte';

export interface ChatQuoteSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatQuoteSharp extends SvelteComponent<ChatQuoteSharpProps> {}
