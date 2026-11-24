import { SvelteComponent } from 'svelte';

export interface ChatXDoubleTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXDoubleTooltip extends SvelteComponent<ChatXDoubleTooltipProps> {}
