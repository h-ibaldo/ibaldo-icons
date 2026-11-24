import { SvelteComponent } from 'svelte';

export interface ChatImageCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatImageCorner extends SvelteComponent<ChatImageCornerProps> {}
