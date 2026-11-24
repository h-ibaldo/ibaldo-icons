import { SvelteComponent } from 'svelte';

export interface ChatForwardBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatForwardBoxy extends SvelteComponent<ChatForwardBoxyProps> {}
