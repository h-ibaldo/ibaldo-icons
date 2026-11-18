import { SvelteComponent } from 'svelte';

export interface ChatBanTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatBanTooltip extends SvelteComponent<ChatBanTooltipProps> {}
