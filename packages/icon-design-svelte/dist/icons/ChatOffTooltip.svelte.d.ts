import { SvelteComponent } from 'svelte';

export interface ChatOffTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatOffTooltip extends SvelteComponent<ChatOffTooltipProps> {}
