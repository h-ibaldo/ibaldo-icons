import { SvelteComponent } from 'svelte';

export interface ChatImageTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatImageTooltip extends SvelteComponent<ChatImageTooltipProps> {}
