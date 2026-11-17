import { SvelteComponent } from 'svelte';

export interface ChatCheckDoubleTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckDoubleTooltip extends SvelteComponent<ChatCheckDoubleTooltipProps> {}
