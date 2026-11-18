import { SvelteComponent } from 'svelte';

export interface ChatTypingTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTypingTooltip extends SvelteComponent<ChatTypingTooltipProps> {}
