import { SvelteComponent } from 'svelte';

export interface ChatXCornerTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXCornerTooltip extends SvelteComponent<ChatXCornerTooltipProps> {}
