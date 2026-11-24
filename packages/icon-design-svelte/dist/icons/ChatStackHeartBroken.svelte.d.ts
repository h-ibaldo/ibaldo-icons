import { SvelteComponent } from 'svelte';

export interface ChatStackHeartBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHeartBroken extends SvelteComponent<ChatStackHeartBrokenProps> {}
