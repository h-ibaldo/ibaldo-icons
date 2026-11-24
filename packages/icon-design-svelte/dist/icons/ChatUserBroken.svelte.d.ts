import { SvelteComponent } from 'svelte';

export interface ChatUserBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatUserBroken extends SvelteComponent<ChatUserBrokenProps> {}
