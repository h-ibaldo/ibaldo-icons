import { SvelteComponent } from 'svelte';

export interface ChatStackLockCornerTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackLockCornerTooltip extends SvelteComponent<ChatStackLockCornerTooltipProps> {}
