import { SvelteComponent } from 'svelte';

export interface ChatCheckCornerTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckCornerTooltip extends SvelteComponent<ChatCheckCornerTooltipProps> {}
