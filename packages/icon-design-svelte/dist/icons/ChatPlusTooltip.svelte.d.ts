import { SvelteComponent } from 'svelte';

export interface ChatPlusTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatPlusTooltip extends SvelteComponent<ChatPlusTooltipProps> {}
