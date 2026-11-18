import { SvelteComponent } from 'svelte';

export interface ChatStackSearchCornerTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackSearchCornerTooltip extends SvelteComponent<ChatStackSearchCornerTooltipProps> {}
