import { SvelteComponent } from 'svelte';

export interface ChatForwardCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatForwardCorner extends SvelteComponent<ChatForwardCornerProps> {}
