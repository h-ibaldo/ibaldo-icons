import { SvelteComponent } from 'svelte';

export interface ChatStackBanCornerTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackBanCornerTooltip extends SvelteComponent<ChatStackBanCornerTooltipProps> {}
