import { SvelteComponent } from 'svelte';

export interface ChatDotTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotTooltip extends SvelteComponent<ChatDotTooltipProps> {}
