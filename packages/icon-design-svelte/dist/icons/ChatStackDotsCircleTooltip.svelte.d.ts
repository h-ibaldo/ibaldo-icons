import { SvelteComponent } from 'svelte';

export interface ChatStackDotsCircleTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsCircleTooltip extends SvelteComponent<ChatStackDotsCircleTooltipProps> {}
