import { SvelteComponent } from 'svelte';

export interface ChatStackEditTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackEditTooltip extends SvelteComponent<ChatStackEditTooltipProps> {}
