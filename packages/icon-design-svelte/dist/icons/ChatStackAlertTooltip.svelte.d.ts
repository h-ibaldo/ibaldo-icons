import { SvelteComponent } from 'svelte';

export interface ChatStackAlertTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackAlertTooltip extends SvelteComponent<ChatStackAlertTooltipProps> {}
