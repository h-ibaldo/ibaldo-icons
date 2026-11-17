import { SvelteComponent } from 'svelte';

export interface ChatStackReplyNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackReplyNotch extends SvelteComponent<ChatStackReplyNotchProps> {}
