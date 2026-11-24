import { SvelteComponent } from 'svelte';

export interface ChatReplyAllSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatReplyAllSharp extends SvelteComponent<ChatReplyAllSharpProps> {}
