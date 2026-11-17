import { SvelteComponent } from 'svelte';

export interface ChatStackMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackMinus extends SvelteComponent<ChatStackMinusProps> {}
