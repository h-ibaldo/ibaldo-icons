import { SvelteComponent } from 'svelte';

export interface ChatMinusCornerTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatMinusCornerTooltip extends SvelteComponent<ChatMinusCornerTooltipProps> {}
