import { SvelteComponent } from 'svelte';

export interface ChatListProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatList extends SvelteComponent<ChatListProps> {}
