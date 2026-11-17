import { SvelteComponent } from 'svelte';

export interface ChatWarningTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatWarningTooltip extends SvelteComponent<ChatWarningTooltipProps> {}
