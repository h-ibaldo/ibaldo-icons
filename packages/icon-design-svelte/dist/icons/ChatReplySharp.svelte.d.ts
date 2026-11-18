import { SvelteComponent } from 'svelte';

export interface ChatReplySharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatReplySharp extends SvelteComponent<ChatReplySharpProps> {}
