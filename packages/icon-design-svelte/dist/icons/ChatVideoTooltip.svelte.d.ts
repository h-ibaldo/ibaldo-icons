import { SvelteComponent } from 'svelte';

export interface ChatVideoTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatVideoTooltip extends SvelteComponent<ChatVideoTooltipProps> {}
