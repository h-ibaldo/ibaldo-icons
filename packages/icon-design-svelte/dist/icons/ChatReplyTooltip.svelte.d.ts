import { SvelteComponent } from 'svelte';

export interface ChatReplyTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatReplyTooltip extends SvelteComponent<ChatReplyTooltipProps> {}
