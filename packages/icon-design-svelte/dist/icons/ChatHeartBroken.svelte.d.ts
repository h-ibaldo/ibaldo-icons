import { SvelteComponent } from 'svelte';

export interface ChatHeartBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatHeartBroken extends SvelteComponent<ChatHeartBrokenProps> {}
