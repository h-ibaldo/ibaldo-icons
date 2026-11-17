import { SvelteComponent } from 'svelte';

export interface ChatListSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatListSlant extends SvelteComponent<ChatListSlantProps> {}
