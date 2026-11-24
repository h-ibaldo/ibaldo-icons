import { SvelteComponent } from 'svelte';

export interface ChatStackCheckTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackCheckTooltip extends SvelteComponent<ChatStackCheckTooltipProps> {}
