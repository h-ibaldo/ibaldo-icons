import { SvelteComponent } from 'svelte';

export interface ChatDotsTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsTooltip extends SvelteComponent<ChatDotsTooltipProps> {}
