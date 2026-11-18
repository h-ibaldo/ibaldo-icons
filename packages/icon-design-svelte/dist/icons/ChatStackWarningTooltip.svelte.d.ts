import { SvelteComponent } from 'svelte';

export interface ChatStackWarningTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackWarningTooltip extends SvelteComponent<ChatStackWarningTooltipProps> {}
