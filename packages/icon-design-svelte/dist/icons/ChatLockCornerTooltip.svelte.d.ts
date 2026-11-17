import { SvelteComponent } from 'svelte';

export interface ChatLockCornerTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLockCornerTooltip extends SvelteComponent<ChatLockCornerTooltipProps> {}
