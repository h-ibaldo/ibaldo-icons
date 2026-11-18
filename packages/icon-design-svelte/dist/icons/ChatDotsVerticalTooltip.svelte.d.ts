import { SvelteComponent } from 'svelte';

export interface ChatDotsVerticalTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsVerticalTooltip extends SvelteComponent<ChatDotsVerticalTooltipProps> {}
