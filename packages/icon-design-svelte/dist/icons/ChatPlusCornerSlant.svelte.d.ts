import { SvelteComponent } from 'svelte';

export interface ChatPlusCornerSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatPlusCornerSlant extends SvelteComponent<ChatPlusCornerSlantProps> {}
