import { SvelteComponent } from 'svelte';

export interface ChatDotsCircleTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsCircleTooltip extends SvelteComponent<ChatDotsCircleTooltipProps> {}
