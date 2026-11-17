import { SvelteComponent } from 'svelte';

export interface ChatListTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatListTooltip extends SvelteComponent<ChatListTooltipProps> {}
