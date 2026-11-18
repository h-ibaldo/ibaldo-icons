import { SvelteComponent } from 'svelte';

export interface ChatListWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatListWide extends SvelteComponent<ChatListWideProps> {}
