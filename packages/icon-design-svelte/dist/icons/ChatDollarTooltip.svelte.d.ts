import { SvelteComponent } from 'svelte';

export interface ChatDollarTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDollarTooltip extends SvelteComponent<ChatDollarTooltipProps> {}
