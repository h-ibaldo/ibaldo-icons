import { SvelteComponent } from 'svelte';

export interface ChatForwardProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatForward extends SvelteComponent<ChatForwardProps> {}
