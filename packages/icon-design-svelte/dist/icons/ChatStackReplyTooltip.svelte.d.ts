import { SvelteComponent } from 'svelte';

export interface ChatStackReplyTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackReplyTooltip extends SvelteComponent<ChatStackReplyTooltipProps> {}
