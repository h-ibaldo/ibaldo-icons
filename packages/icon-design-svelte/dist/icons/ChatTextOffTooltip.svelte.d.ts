import { SvelteComponent } from 'svelte';

export interface ChatTextOffTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTextOffTooltip extends SvelteComponent<ChatTextOffTooltipProps> {}
