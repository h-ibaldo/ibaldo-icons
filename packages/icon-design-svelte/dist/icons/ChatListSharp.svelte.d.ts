import { SvelteComponent } from 'svelte';

export interface ChatListSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatListSharp extends SvelteComponent<ChatListSharpProps> {}
