import { SvelteComponent } from 'svelte';

export interface ChatReplyAllTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatReplyAllTooltip extends SvelteComponent<ChatReplyAllTooltipProps> {}
