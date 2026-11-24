import { SvelteComponent } from 'svelte';

export interface ChatStackInfoTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackInfoTooltip extends SvelteComponent<ChatStackInfoTooltipProps> {}
