import { SvelteComponent } from 'svelte';

export interface ChatCheckTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckTooltip extends SvelteComponent<ChatCheckTooltipProps> {}
