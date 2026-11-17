import { SvelteComponent } from 'svelte';

export interface ChatPlusCircleTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatPlusCircleTooltip extends SvelteComponent<ChatPlusCircleTooltipProps> {}
