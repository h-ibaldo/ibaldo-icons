import { SvelteComponent } from 'svelte';

export interface ChatPlusCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatPlusCorner extends SvelteComponent<ChatPlusCornerProps> {}
