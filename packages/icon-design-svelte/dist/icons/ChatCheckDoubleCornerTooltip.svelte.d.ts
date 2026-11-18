import { SvelteComponent } from 'svelte';

export interface ChatCheckDoubleCornerTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckDoubleCornerTooltip extends SvelteComponent<ChatCheckDoubleCornerTooltipProps> {}
