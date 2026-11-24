import { SvelteComponent } from 'svelte';

export interface ChatForwardBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatForwardBroken extends SvelteComponent<ChatForwardBrokenProps> {}
