import { SvelteComponent } from 'svelte';

export interface ChatBanCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatBanCorner extends SvelteComponent<ChatBanCornerProps> {}
