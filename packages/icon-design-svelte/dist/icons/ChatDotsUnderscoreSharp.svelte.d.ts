import { SvelteComponent } from 'svelte';

export interface ChatDotsUnderscoreSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsUnderscoreSharp extends SvelteComponent<ChatDotsUnderscoreSharpProps> {}
