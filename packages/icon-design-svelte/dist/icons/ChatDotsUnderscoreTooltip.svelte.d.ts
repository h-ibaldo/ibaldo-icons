import { SvelteComponent } from 'svelte';

export interface ChatDotsUnderscoreTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsUnderscoreTooltip extends SvelteComponent<ChatDotsUnderscoreTooltipProps> {}
