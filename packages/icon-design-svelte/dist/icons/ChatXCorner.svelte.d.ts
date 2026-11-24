import { SvelteComponent } from 'svelte';

export interface ChatXCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXCorner extends SvelteComponent<ChatXCornerProps> {}
