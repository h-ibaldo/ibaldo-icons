import { SvelteComponent } from 'svelte';

export interface ChatHashTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatHashTooltip extends SvelteComponent<ChatHashTooltipProps> {}
