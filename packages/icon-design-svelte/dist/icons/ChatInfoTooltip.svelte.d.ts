import { SvelteComponent } from 'svelte';

export interface ChatInfoTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatInfoTooltip extends SvelteComponent<ChatInfoTooltipProps> {}
