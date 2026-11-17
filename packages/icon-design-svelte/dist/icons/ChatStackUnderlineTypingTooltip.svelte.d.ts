import { SvelteComponent } from 'svelte';

export interface ChatStackUnderlineTypingTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackUnderlineTypingTooltip extends SvelteComponent<ChatStackUnderlineTypingTooltipProps> {}
