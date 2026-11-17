import { SvelteComponent } from 'svelte';

export interface ChatMinusTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatMinusTooltip extends SvelteComponent<ChatMinusTooltipProps> {}
