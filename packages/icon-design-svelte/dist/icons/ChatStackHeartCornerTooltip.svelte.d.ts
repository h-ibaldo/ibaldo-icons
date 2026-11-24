import { SvelteComponent } from 'svelte';

export interface ChatStackHeartCornerTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHeartCornerTooltip extends SvelteComponent<ChatStackHeartCornerTooltipProps> {}
