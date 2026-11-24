import { SvelteComponent } from 'svelte';

export interface ChatXCircleTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXCircleTooltip extends SvelteComponent<ChatXCircleTooltipProps> {}
