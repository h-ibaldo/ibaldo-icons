import { SvelteComponent } from 'svelte';

export interface ChatForwardCornerSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatForwardCornerSlant extends SvelteComponent<ChatForwardCornerSlantProps> {}
