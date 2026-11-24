import { SvelteComponent } from 'svelte';

export interface ChatListBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatListBroken extends SvelteComponent<ChatListBrokenProps> {}
