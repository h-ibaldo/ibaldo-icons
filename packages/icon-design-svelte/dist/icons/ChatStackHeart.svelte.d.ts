import { SvelteComponent } from 'svelte';

export interface ChatStackHeartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHeart extends SvelteComponent<ChatStackHeartProps> {}
