import { SvelteComponent } from 'svelte';

export interface ChatMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatMinus extends SvelteComponent<ChatMinusProps> {}
