import { SvelteComponent } from 'svelte';

export interface ChatAlertTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatAlertTooltip extends SvelteComponent<ChatAlertTooltipProps> {}
