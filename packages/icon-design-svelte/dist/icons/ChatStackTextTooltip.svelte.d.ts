import { SvelteComponent } from 'svelte';

export interface ChatStackTextTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackTextTooltip extends SvelteComponent<ChatStackTextTooltipProps> {}
