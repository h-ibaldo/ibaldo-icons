import { SvelteComponent } from 'svelte';

export interface ChatStackLaughTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackLaughTooltip extends SvelteComponent<ChatStackLaughTooltipProps> {}
