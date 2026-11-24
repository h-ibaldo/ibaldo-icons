import { SvelteComponent } from 'svelte';

export interface ChatStackTypingTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackTypingTooltip extends SvelteComponent<ChatStackTypingTooltipProps> {}
