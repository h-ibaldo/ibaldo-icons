import { SvelteComponent } from 'svelte';

export interface ChatUnderlineTypingTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatUnderlineTypingTooltip extends SvelteComponent<ChatUnderlineTypingTooltipProps> {}
