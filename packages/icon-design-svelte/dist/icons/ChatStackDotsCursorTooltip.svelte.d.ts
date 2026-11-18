import { SvelteComponent } from 'svelte';

export interface ChatStackDotsCursorTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsCursorTooltip extends SvelteComponent<ChatStackDotsCursorTooltipProps> {}
