import { SvelteComponent } from 'svelte';

export interface ChatStackReplyAllTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackReplyAllTooltip extends SvelteComponent<ChatStackReplyAllTooltipProps> {}
