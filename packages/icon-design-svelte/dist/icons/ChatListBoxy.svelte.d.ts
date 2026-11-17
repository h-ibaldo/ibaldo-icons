import { SvelteComponent } from 'svelte';

export interface ChatListBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatListBoxy extends SvelteComponent<ChatListBoxyProps> {}
