import { SvelteComponent } from 'svelte';

export interface ChatHeartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatHeart extends SvelteComponent<ChatHeartProps> {}
