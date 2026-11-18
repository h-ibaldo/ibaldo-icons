import { SvelteComponent } from 'svelte';

export interface ChatDotsCursorTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsCursorTooltip extends SvelteComponent<ChatDotsCursorTooltipProps> {}
