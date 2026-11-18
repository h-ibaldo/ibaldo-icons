import { SvelteComponent } from 'svelte';

export interface ChatStackPlusTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackPlusTooltip extends SvelteComponent<ChatStackPlusTooltipProps> {}
