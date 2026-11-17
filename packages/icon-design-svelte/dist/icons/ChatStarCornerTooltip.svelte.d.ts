import { SvelteComponent } from 'svelte';

export interface ChatStarCornerTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStarCornerTooltip extends SvelteComponent<ChatStarCornerTooltipProps> {}
