import { SvelteComponent } from 'svelte';

export interface ChatStackDotsTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsTooltip extends SvelteComponent<ChatStackDotsTooltipProps> {}
