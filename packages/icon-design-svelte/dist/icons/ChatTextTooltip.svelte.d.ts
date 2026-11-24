import { SvelteComponent } from 'svelte';

export interface ChatTextTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTextTooltip extends SvelteComponent<ChatTextTooltipProps> {}
