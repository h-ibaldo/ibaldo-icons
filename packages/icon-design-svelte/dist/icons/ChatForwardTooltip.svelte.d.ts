import { SvelteComponent } from 'svelte';

export interface ChatForwardTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatForwardTooltip extends SvelteComponent<ChatForwardTooltipProps> {}
